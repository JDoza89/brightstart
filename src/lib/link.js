export function multilinkHref(link) {
	if (!link) return '#';
	if (link.linktype === 'story' && link.cached_url) {
		return link.cached_url.startsWith('/')
			? link.cached_url
			: `/${link.cached_url}`;
	}
	return link.url || link.cached_url || '#';
}

export function multilinkIsExternal(link) {
	if (!link) return false;
	const href = multilinkHref(link);
	return /^https?:\/\//i.test(href);
}
