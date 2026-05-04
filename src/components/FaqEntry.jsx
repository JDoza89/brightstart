import { storyblokEditable, renderRichText } from '@storyblok/react/rsc';

const FaqEntry = ({ blok, story }) => {
	const data = story?.content || blok;
	if (!data) return null;
	const html = renderRichText(data.answer);
	return (
		<details className="faq-entry" {...storyblokEditable(blok || data)}>
			<summary className="faq-entry__summary">{data.question}</summary>
			<div
				className="faq-entry__answer"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</details>
	);
};

export default FaqEntry;
