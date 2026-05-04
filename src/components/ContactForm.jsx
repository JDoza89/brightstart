import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const ContactForm = ({ blok }) => (
	<section className="section section--white" {...storyblokEditable(blok)}>
		{blok.header?.map((header) => (
			<StoryblokServerComponent blok={header} key={header._uid} />
		))}
		<div className="container">
			<form
				className="contact-form"
				action={blok.submit_endpoint || undefined}
				method="post"
			>
				{blok.fields?.map((field) => (
					<StoryblokServerComponent blok={field} key={field._uid} />
				))}
				<button type="submit" className="cta cta--primary contact-form__submit">
					{blok.submit_label || 'Send'}
				</button>
				{blok.success_message ? (
					<p className="contact-form__success">{blok.success_message}</p>
				) : null}
			</form>
		</div>
	</section>
);

export default ContactForm;
