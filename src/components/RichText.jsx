import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';

const RichText = ({ blok }) => {
	const html = renderRichText(blok.content);
	return (
		<section className="section" {...storyblokEditable(blok)}>
			<div className="container">
				<div className="rich-text" dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</section>
	);
};

export default RichText;
