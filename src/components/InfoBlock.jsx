import { storyblokEditable } from '@storyblok/react/rsc';

const InfoBlock = ({ blok }) => (
	<div className="info-block" {...storyblokEditable(blok)}>
		<span className="info-block__label">{blok.label}</span>
		<p className="info-block__primary">{blok.primary}</p>
		{blok.secondary ? (
			<p className="info-block__secondary">{blok.secondary}</p>
		) : null}
	</div>
);

export default InfoBlock;
