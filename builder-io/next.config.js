/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/clones/builder-io',
  assetPrefix: '/clones/builder-io',
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
