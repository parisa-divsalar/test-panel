/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's2.coinmarketcap.com',
            },
        ],
    },
  reactStrictMode: false,
    experimental: {
        appDir: true
    }
}

module.exports = nextConfig
