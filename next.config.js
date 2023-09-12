/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "dummyimage.com",
      "lh3.googleusercontent.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
