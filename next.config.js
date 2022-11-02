/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io", "upload.wikimedia.org", "i.imgur.com"],
  },
};

module.exports = nextConfig;
