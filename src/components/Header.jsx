import Link from 'next/link';
import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { multilinkHref } from '@/lib/link';

export default function Header({ config }) {
	if (!config) return null;
	return (
		<header className="header">
			<div className="container header__inner">
				<Link href="/" className="header__brand">
					{config.brand_name}
				</Link>
				<nav className="header__nav">
					{config.nav_links?.length ? (
						<ul className="header__links">
							{config.nav_links.map((link) => (
								<li key={link._uid}>
									<Link href={multilinkHref(link.link)}>{link.label}</Link>
								</li>
							))}
						</ul>
					) : null}
					{config.nav_cta?.map((cta) => (
						<StoryblokServerComponent blok={cta} key={cta._uid} />
					))}
				</nav>
			</div>
		</header>
	);
}
