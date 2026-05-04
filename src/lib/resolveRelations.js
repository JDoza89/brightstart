const RELATION_FIELDS = {
	team_grid: { members: 'array' },
	faq_list: { entries: 'array' },
	post_grid: { articles: 'array' },
	featured_post: { article: 'one' },
	article: { author: 'one' },
};

export function resolveStoryRelations(story, rels) {
	if (!story) return story;
	if (!rels?.length) return story;
	const map = new Map(rels.map((r) => [r.uuid, r]));

	const visit = (node) => {
		if (Array.isArray(node)) return node.map(visit);
		if (!node || typeof node !== 'object') return node;

		const fields = node.component ? RELATION_FIELDS[node.component] : null;
		const next = { ...node };

		if (fields) {
			for (const [key, kind] of Object.entries(fields)) {
				const value = next[key];
				if (kind === 'array' && Array.isArray(value)) {
					next[key] = value
						.map((uuid) =>
							typeof uuid === 'string' ? map.get(uuid) || null : uuid,
						)
						.filter(Boolean);
				} else if (kind === 'one' && typeof value === 'string' && value) {
					next[key] = map.get(value) || null;
				}
			}
		}

		for (const key of Object.keys(next)) {
			next[key] = visit(next[key]);
		}
		return next;
	};

	return { ...story, content: visit(story.content) };
}
