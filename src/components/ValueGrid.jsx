import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const ValueGrid = ({ blok }) => (
	<section className="section section--white" {...storyblokEditable(blok)}>
		{blok.header?.map((header) => (
			<StoryblokServerComponent blok={header} key={header._uid} />
		))}
		<div className="container">
			<div className="value-grid">
				{blok.items?.map((item) => (
					<StoryblokServerComponent blok={item} key={item._uid} />
				))}
			</div>
		</div>
	</section>
);

export default ValueGrid;
