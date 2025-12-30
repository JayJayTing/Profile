/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Profile',
  assetPrefix: '/Profile/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
