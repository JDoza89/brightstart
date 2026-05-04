import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';
import StoryImage from '@/components/StoryImage';
import { multilinkHref } from '@/lib/link';

const ContentCard = ({ blok }) => {
	const href = blok.link ? multilinkHref(blok.link) : null;
	const Wrapper = href && href !== '#' ? Link : 'article';
	const wrapperProps = href && href !== '#' ? { href } : {};

	return (
		<Wrapper
			{...wrapperProps}
			{...storyblokEditable(blok)}
			className="content-card"
		>
			{blok.image?.filename ? (
				<div className="content-card__media">
					<StoryImage
						asset={blok.image}
						alt={blok.image.alt || blok.title}
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
					/>
				</div>
			) : null}
			{blok.category ? (
				<span className="content-card__category">{blok.category}</span>
			) : null}
			<h3 className="content-card__title">{blok.title}</h3>
			{blok.description ? (
				<p className="content-card__description">{blok.description}</p>
			) : null}
		</Wrapper>
	);
};

export default ContentCard;
