import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const themeClass = {
	navy: 'cta-strip--navy',
	teal: 'cta-strip--teal',
	cream: 'cta-strip--cream',
};

const CtaStrip = ({ blok }) => (
	<section className="section" {...storyblokEditable(blok)}>
		<div className="container">
			<div className={`cta-strip ${themeClass[blok.theme] || themeClass.navy}`}>
				<div className="cta-strip__copy">
					<p className="cta-strip__headline">{blok.headline}</p>
					{blok.supporting_text ? (
						<p className="cta-strip__supporting">{blok.supporting_text}</p>
					) : null}
				</div>
				{blok.cta?.map((cta) => (
					<StoryblokServerComponent blok={cta} key={cta._uid} />
				))}
			</div>
		</div>
	</section>
);

export default CtaStrip;
