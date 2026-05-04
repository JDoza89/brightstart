import { storyblokEditable } from '@storyblok/react/rsc';

const ValueCard = ({ blok }) => (
	<article className="value-card" {...storyblokEditable(blok)}>
		{blok.icon ? <span className="value-card__icon">{blok.icon}</span> : null}
		<h3 className="value-card__title">{blok.title}</h3>
		{blok.description ? (
			<p className="value-card__description">{blok.description}</p>
		) : null}
	</article>
);

export default ValueCard;
