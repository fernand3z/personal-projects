/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  trailingSlash: true,
}

module.exports = nextConfig 