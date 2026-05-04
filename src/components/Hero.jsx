import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import StoryImage from '@/components/StoryImage';

const Hero = ({ blok }) => (
	<section className="section" {...storyblokEditable(blok)}>
		<div className="container">
			<div className="hero">
				{blok.eyebrow ? (
					<span className="hero__eyebrow">{blok.eyebrow}</span>
				) : null}
				<h1 className="hero__headline">{blok.headline}</h1>
				{blok.supporting_text ? (
					<p className="hero__supporting">{blok.supporting_text}</p>
				) : null}
				{blok.ctas?.length ? (
					<div className="hero__ctas">
						{blok.ctas.map((cta) => (
							<StoryblokServerComponent blok={cta} key={cta._uid} />
						))}
					</div>
				) : null}
				{blok.media?.filename ? (
					<div className="hero__media">
						<StoryImage
							asset={blok.media}
							alt={blok.media.alt || blok.headline}
							fill
							priority
							sizes="(max-width: 1312px) 100vw, 1312px"
						/>
					</div>
				) : null}
			</div>
		</div>
	</section>
);

export default Hero;
