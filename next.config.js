/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
