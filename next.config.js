/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/superkenil',
  assetPrefix: '/superkenil',
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
