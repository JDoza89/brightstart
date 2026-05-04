import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';
import StoryImage from '@/components/StoryImage';

const Article = ({ blok, story }) => {
	const c = blok || story?.content;
	if (!c) return null;
	const html = renderRichText(c.body);
	const meta = [];
	if (c.author?.content?.full_name) meta.push(c.author.content.full_name);
	if (c.read_time) meta.push(`${c.read_time} min read`);
	if (c.publish_date) {
		const d = new Date(c.publish_date);
		if (!Number.isNaN(d.getTime())) {
			meta.push(
				d.toLocaleDateString('en-US', {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
				}),
			);
		}
	}

	return (
		<article className="container article" {...storyblokEditable(c)}>
			{c.category ? (
				<span className="content-card__category">{c.category}</span>
			) : null}
			<h1 className="article__title">{story?.name}</h1>
			{c.summary ? <p className="article__summary">{c.summary}</p> : null}
			{meta.length ? <p className="article__meta">{meta.join('   ·   ')}</p> : null}
			{c.hero_image?.filename ? (
				<div className="article__hero">
					<StoryImage
						asset={c.hero_image}
						alt={c.hero_image.alt || story?.name || ''}
						fill
						priority
						sizes="(max-width: 1312px) 100vw, 1312px"
					/>
				</div>
			) : null}
			<div
				className="article__body"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</article>
	);
};

export default Article;
