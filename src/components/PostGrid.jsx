import Link from 'next/link';
import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import StoryImage from '@/components/StoryImage';

const PostGrid = ({ blok }) => {
	const articles = blok.articles || [];
	return (
		<section className="section section--white" {...storyblokEditable(blok)}>
			{blok.header?.map((header) => (
				<StoryblokServerComponent blok={header} key={header._uid} />
			))}
			<div className="container">
				<div className="post-grid">
					{articles.map((article) =>
						article?.uuid ? (
							<PostCard key={article.uuid} article={article} />
						) : null,
					)}
				</div>
			</div>
		</section>
	);
};

function PostCard({ article }) {
	const c = article.content || {};
	return (
		<Link href={`/${article.full_slug}`} className="post-card content-card">
			{c.hero_image?.filename ? (
				<div className="content-card__media">
					<StoryImage
						asset={c.hero_image}
						alt={c.hero_image.alt || article.name}
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
					/>
				</div>
			) : null}
			{c.category ? (
				<span className="content-card__category">{c.category}</span>
			) : null}
			<h3 className="content-card__title">{article.name}</h3>
			{c.summary ? (
				<p className="content-card__description">{c.summary}</p>
			) : null}
		</Link>
	);
}

export default PostGrid;
