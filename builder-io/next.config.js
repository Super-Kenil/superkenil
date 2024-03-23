/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/builder-io',
  assetPrefix: '/builder-io',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io'
      }
    ],
    dangerouslyAllowSVG: true,
  }
}

module.exports = nextConfig
