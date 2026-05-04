import { Inter } from 'next/font/google';
import StoryblokProvider from '@/components/StoryblokProvider';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-inter',
	display: 'swap',
});

export const metadata = {
	title: 'BrightStart',
	description: 'Where creativity meets joy.',
};

export default function RootLayout({ children }) {
	return (
		<StoryblokProvider>
			<html lang="en" className={inter.variable}>
				<body>{children}</body>
			</html>
		</StoryblokProvider>
	);
}
