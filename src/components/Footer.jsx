import Link from 'next/link';
import { multilinkHref } from '@/lib/link';

export default function Footer({ config }) {
	if (!config) return null;
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__top">
					<div className="footer__brand">
						{config.footer_tagline ? (
							<p className="footer__tagline">{config.footer_tagline}</p>
						) : null}
						{config.footer_description ? (
							<p className="footer__description">
								{config.footer_description}
							</p>
						) : null}
					</div>
					{config.footer_columns?.map((col) => (
						<div className="footer__col" key={col._uid}>
							<h4>{col.heading}</h4>
							<ul>
								{col.links?.map((link) => (
									<li key={link._uid}>
										<Link href={multilinkHref(link.link)}>{link.label}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="footer__bottom">
					<span>{config.copyright_text}</span>
					{config.footer_legal_links?.length ? (
						<ul className="footer__legal">
							{config.footer_legal_links.map((link) => (
								<li key={link._uid}>
									<Link href={multilinkHref(link.link)}>{link.label}</Link>
								</li>
							))}
						</ul>
					) : null}
				</div>
			</div>
		</footer>
	);
}
