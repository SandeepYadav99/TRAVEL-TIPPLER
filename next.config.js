/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.traveltippler.com"],
    unoptimized: true,
  },
  output: 'export', 
};

module.exports = nextConfig
