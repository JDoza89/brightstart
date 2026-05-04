import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const InfoBlockGroup = ({ blok }) => (
	<section className="section section--white" {...storyblokEditable(blok)}>
		{blok.header?.map((header) => (
			<StoryblokServerComponent blok={header} key={header._uid} />
		))}
		<div className="container">
			<div className="info-block-group">
				{blok.blocks?.map((block) => (
					<StoryblokServerComponent blok={block} key={block._uid} />
				))}
			</div>
		</div>
	</section>
);

export default InfoBlockGroup;
