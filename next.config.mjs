/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		STORYBLOK_DELIVERY_API_TOKEN: process.env.STORYBLOK_DELIVERY_API_TOKEN,
		STORYBLOK_API_BASE_URL: process.env.STORYBLOK_API_BASE_URL,
		STORYBLOK_REGION: process.env.STORYBLOK_REGION,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'a.storyblok.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 's3.amazonaws.com',
				pathname: '/a.storyblok.com/**',
			},
		],
	},
};

export default nextConfig;
