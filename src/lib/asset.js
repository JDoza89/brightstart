export function assetDimensions(asset) {
	const url = asset?.filename || '';
	const match = url.match(/\/f\/\d+\/(\d+)x(\d+)\//);
	if (match) {
		return { width: Number(match[1]), height: Number(match[2]) };
	}
	return { width: 1600, height: 1067 };
}
