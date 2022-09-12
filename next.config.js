/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const nextConfig = {
  
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    ssr: true
  },
  images: {
    domains: ['cdn.sanity.io'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  async redirects() {
    return [
      {
        source: '/capabilities',
        destination: '/skills', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  }
}

module.exports = withVideos(nextConfig);