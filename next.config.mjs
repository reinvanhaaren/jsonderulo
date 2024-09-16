/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    after: true,
  },
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV !== "production",
    },
  },
};

export default nextConfig;
