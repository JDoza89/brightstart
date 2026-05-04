import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import FaqEntry from '@/components/FaqEntry';

const FaqList = ({ blok }) => (
	<section className="section section--white" {...storyblokEditable(blok)}>
		{blok.header?.map((header) => (
			<StoryblokServerComponent blok={header} key={header._uid} />
		))}
		<div className="container">
			<div className="faq-list">
				{blok.entries?.map((story) =>
					story?.uuid ? <FaqEntry key={story.uuid} story={story} /> : null,
				)}
			</div>
		</div>
	</section>
);

export default FaqList;
