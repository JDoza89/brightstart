import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const CardGrid = ({ blok }) => (
	<section className="section section--white" {...storyblokEditable(blok)}>
		{blok.header?.map((header) => (
			<StoryblokServerComponent blok={header} key={header._uid} />
		))}
		<div className="container">
			<div className="card-grid">
				{blok.cards?.map((card) => (
					<StoryblokServerComponent blok={card} key={card._uid} />
				))}
			</div>
		</div>
	</section>
);

export default CardGrid;
