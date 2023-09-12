/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "npstyle.pl",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
