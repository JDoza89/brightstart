import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi, RESOLVE_RELATIONS } from '@/lib/storyblok';
import { resolveStoryRelations } from '@/lib/resolveRelations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function Page({ params }) {
	const { slug } = await params;
	const fullSlug = slug?.length ? slug.join('/') : 'home';

	const api = getStoryblokApi();
	const sbParams = { version: 'draft' };

	const [pageRes, configRes] = await Promise.all([
		api.get(`cdn/stories/${fullSlug}`, {
			...sbParams,
			resolve_relations: RESOLVE_RELATIONS.join(','),
		}),
		api.get('cdn/stories/config', sbParams).catch(() => null),
	]);

	const story = resolveStoryRelations(pageRes.data.story, pageRes.data.rels);
	const config = configRes?.data?.story?.content || null;

	return (
		<>
			<Header config={config} />
			<StoryblokStory story={story} />
			<Footer config={config} />
		</>
	);
}
