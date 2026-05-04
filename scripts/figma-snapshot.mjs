#!/usr/bin/env node
// Bulk-cache the parts of a Figma file that the public REST API exposes.
// Usage:
//   FIGMA_TOKEN=... node scripts/figma-snapshot.mjs <fileKey> [<nodeId>...]
//
// Output:
//   ~/projects/.figma-cache/<fileKey>/
//     metadata.json          full document tree (or subtree if nodeIds passed)
//     variables.json         local variables (best-effort — requires plan support)
//     screenshots/<id>.png   2x PNG render of each requested node (or all top-level frames)
//     manifest.json          {fetched_at, fileKey, nodeIds, files: [...]}

import { writeFile, mkdir } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";

const TOKEN = process.env.FIGMA_TOKEN;
const [, , fileKey, ...explicitNodeIds] = process.argv;

if (!TOKEN || !fileKey) {
	console.error("usage: FIGMA_TOKEN=... figma-snapshot.mjs <fileKey> [nodeId...]");
	process.exit(1);
}

const headers = { "X-Figma-Token": TOKEN };
const cacheRoot = join(homedir(), "projects", ".figma-cache", fileKey);
await mkdir(join(cacheRoot, "screenshots"), { recursive: true });

async function api(path) {
	const res = await fetch(`https://api.figma.com${path}`, { headers });
	if (!res.ok) throw new Error(`${res.status} ${res.statusText} on ${path}`);
	return res.json();
}

// Document tree (or subtree)
const metadata = explicitNodeIds.length
	? await api(`/v1/files/${fileKey}/nodes?ids=${explicitNodeIds.join(",")}&geometry=paths`)
	: await api(`/v1/files/${fileKey}`);
await writeFile(join(cacheRoot, "metadata.json"), JSON.stringify(metadata, null, 2));

// Identify nodes to screenshot. If user passed ids, use those. Otherwise, top-level FRAMEs on each canvas.
function collectFrames(node, out = []) {
	if (!node) return out;
	if (node.type === "FRAME" || node.type === "COMPONENT" || node.type === "COMPONENT_SET") out.push(node.id);
	for (const child of node.children ?? []) collectFrames(child, out);
	return out;
}
let nodeIds = explicitNodeIds;
if (nodeIds.length === 0) {
	const canvases = metadata.document?.children ?? [];
	for (const canvas of canvases) {
		for (const child of canvas.children ?? []) {
			if (child.type === "FRAME") nodeIds.push(child.id);
		}
	}
}

// Variables (best-effort — endpoint may 403 on free plans)
try {
	const vars = await api(`/v1/files/${fileKey}/variables/local`);
	await writeFile(join(cacheRoot, "variables.json"), JSON.stringify(vars, null, 2));
} catch (e) {
	console.warn(`skipping variables: ${e.message}`);
}

// Image render URLs for the chosen nodes, then download each PNG
if (nodeIds.length) {
	const images = await api(
		`/v1/images/${fileKey}?ids=${nodeIds.join(",")}&format=png&scale=2`
	);
	const downloaded = [];
	for (const [id, url] of Object.entries(images.images ?? {})) {
		if (!url) continue;
		const safeId = id.replace(/[:/]/g, "_");
		const dest = join(cacheRoot, "screenshots", `${safeId}.png`);
		const png = Buffer.from(await (await fetch(url)).arrayBuffer());
		await writeFile(dest, png);
		downloaded.push(dest);
	}
	console.log(`wrote ${downloaded.length} screenshots`);
}

await writeFile(
	join(cacheRoot, "manifest.json"),
	JSON.stringify(
		{ fetched_at: new Date().toISOString(), fileKey, nodeIds, root: cacheRoot },
		null,
		2
	)
);
console.log(`cache ready at ${cacheRoot}`);
