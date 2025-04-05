import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	experimental: {
		optimisticClientCache: true
	},
	compress: true,
	productionBrowserSourceMaps: false
}

export default nextConfig
