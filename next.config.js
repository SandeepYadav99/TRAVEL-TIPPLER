/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/TRAVEL-TIPPLER',
  trailingSlash: true,
  images: {
    domains: ["www.traveltippler.com"],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig
