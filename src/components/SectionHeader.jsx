import { storyblokEditable } from '@storyblok/react/rsc';

const SectionHeader = ({ blok }) => (
	<header className="section" {...storyblokEditable(blok)}>
		<div className="container">
			<div className="section-header">
				{blok.eyebrow ? (
					<span className="section-header__eyebrow">{blok.eyebrow}</span>
				) : null}
				<h2 className="section-header__title">{blok.title}</h2>
				{blok.supporting_text ? (
					<p className="section-header__supporting">{blok.supporting_text}</p>
				) : null}
			</div>
		</div>
	</header>
);

export default SectionHeader;
