import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import TeamMember from '@/components/TeamMember';

const TeamGrid = ({ blok }) => (
	<section className="section" {...storyblokEditable(blok)}>
		{blok.header?.map((header) => (
			<StoryblokServerComponent blok={header} key={header._uid} />
		))}
		<div className="container">
			<div className="team-grid">
				{blok.members?.map((story) =>
					story?.uuid ? <TeamMember key={story.uuid} story={story} /> : null,
				)}
			</div>
		</div>
	</section>
);

export default TeamGrid;
