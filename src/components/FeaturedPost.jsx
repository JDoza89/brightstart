import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';
import StoryImage from '@/components/StoryImage';

const FeaturedPost = ({ blok }) => {
	const article = blok.article;
	if (!article?.content) return null;
	const { full_slug } = article;
	const c = article.content;
	const meta = formatMeta(c, article);

	return (
		<section className="section" {...storyblokEditable(blok)}>
			<div className="container">
				<article className="featured-post">
					{c.hero_image?.filename ? (
						<div className="featured-post__media">
							<StoryImage
								asset={c.hero_image}
								alt={c.hero_image.alt || article.name}
								fill
								sizes="(max-width: 880px) 100vw, 560px"
							/>
						</div>
					) : null}
					<div className="featured-post__body">
						<span className="featured-post__category">
							{c.category ? `Featured · ${c.category}` : 'Featured'}
						</span>
						<h2 className="featured-post__title">
							<Link href={`/${full_slug}`}>{article.name}</Link>
						</h2>
						{c.summary ? (
							<p className="featured-post__summary">{c.summary}</p>
						) : null}
						{meta ? <p className="featured-post__meta">{meta}</p> : null}
					</div>
				</article>
			</div>
		</section>
	);
};

function formatMeta(c, article) {
	const parts = [];
	const author = c.author?.content?.full_name;
	if (author) parts.push(author);
	if (c.read_time) parts.push(`${c.read_time} min read`);
	const date = c.publish_date || article.first_published_at;
	if (date) {
		const d = new Date(date);
		if (!Number.isNaN(d.getTime())) {
			parts.push(
				d.toLocaleDateString('en-US', {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
				}),
			);
		}
	}
	return parts.join('   ·   ');
}

export default FeaturedPost;
