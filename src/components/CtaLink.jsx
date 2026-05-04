import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';
import { multilinkHref, multilinkIsExternal } from '@/lib/link';

const styleClass = {
	primary: 'cta cta--primary',
	ghost: 'cta cta--ghost',
	inline: 'cta cta--inline',
};

const CtaLink = ({ blok }) => {
	const className = styleClass[blok.style] || styleClass.primary;
	const href = multilinkHref(blok.link);
	const external = multilinkIsExternal(blok.link);

	if (external) {
		return (
			<a
				{...storyblokEditable(blok)}
				className={className}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
			>
				{blok.label}
			</a>
		);
	}

	return (
		<Link {...storyblokEditable(blok)} className={className} href={href}>
			{blok.label}
		</Link>
	);
};

export default CtaLink;
