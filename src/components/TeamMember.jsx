import { storyblokEditable } from '@storyblok/react/rsc';
import StoryImage from '@/components/StoryImage';

const TeamMember = ({ blok, story }) => {
	const data = story?.content || blok;
	if (!data) return null;
	return (
		<article className="team-member" {...storyblokEditable(blok || data)}>
			{data.avatar?.filename ? (
				<div className="team-member__avatar">
					<StoryImage
						asset={data.avatar}
						alt={data.avatar.alt || data.full_name}
						fill
						sizes="140px"
					/>
				</div>
			) : null}
			<h3 className="team-member__name">{data.full_name}</h3>
			{data.role ? <p className="team-member__role">{data.role}</p> : null}
		</article>
	);
};

export default TeamMember;
