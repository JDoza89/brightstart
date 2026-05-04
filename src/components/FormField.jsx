import { storyblokEditable } from '@storyblok/react/rsc';

const FormField = ({ blok }) => {
	const id = `field-${blok._uid}`;
	const sharedProps = {
		id,
		name: blok.name,
		placeholder: blok.placeholder || undefined,
		required: blok.required || undefined,
		className: 'form-field__input',
	};
	return (
		<div className="form-field" {...storyblokEditable(blok)}>
			<label className="form-field__label" htmlFor={id}>
				{blok.label}
			</label>
			{blok.type === 'textarea' ? (
				<textarea rows={4} {...sharedProps} />
			) : blok.type === 'select' ? (
				<select {...sharedProps}>
					{(blok.options || '')
						.split('\n')
						.map((o) => o.trim())
						.filter(Boolean)
						.map((o) => (
							<option key={o} value={o}>
								{o}
							</option>
						))}
				</select>
			) : (
				<input type={blok.type || 'text'} {...sharedProps} />
			)}
		</div>
	);
};

export default FormField;
