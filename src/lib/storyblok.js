import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from '@/components/Page';
import Article from '@/components/Article';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CardGrid from '@/components/CardGrid';
import ContentCard from '@/components/ContentCard';
import ValueGrid from '@/components/ValueGrid';
import ValueCard from '@/components/ValueCard';
import TeamGrid from '@/components/TeamGrid';
import TeamMember from '@/components/TeamMember';
import FeaturedPost from '@/components/FeaturedPost';
import PostGrid from '@/components/PostGrid';
import FaqList from '@/components/FaqList';
import FaqEntry from '@/components/FaqEntry';
import CtaStrip from '@/components/CtaStrip';
import CtaLink from '@/components/CtaLink';
import ContactForm from '@/components/ContactForm';
import FormField from '@/components/FormField';
import InfoBlockGroup from '@/components/InfoBlockGroup';
import InfoBlock from '@/components/InfoBlock';
import RichText from '@/components/RichText';
import SeoMeta from '@/components/SeoMeta';

export const RESOLVE_RELATIONS = [
	'team_grid.members',
	'faq_list.entries',
	'featured_post.article',
	'post_grid.articles',
	'article.author',
];

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
	use: [apiPlugin],
	components: {
		page: Page,
		article: Article,
		hero: Hero,
		section_header: SectionHeader,
		card_grid: CardGrid,
		content_card: ContentCard,
		value_grid: ValueGrid,
		value_card: ValueCard,
		team_grid: TeamGrid,
		team_member: TeamMember,
		featured_post: FeaturedPost,
		post_grid: PostGrid,
		faq_list: FaqList,
		faq_entry: FaqEntry,
		cta_strip: CtaStrip,
		cta_link: CtaLink,
		contact_form: ContactForm,
		form_field: FormField,
		info_block_group: InfoBlockGroup,
		info_block: InfoBlock,
		rich_text: RichText,
		seo_meta: SeoMeta,
	},
	apiOptions: {
		region: process.env.STORYBLOK_REGION || 'eu',
		endpoint: process.env.STORYBLOK_API_BASE_URL
			? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
			: undefined,
	},
});
