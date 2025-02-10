import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        port: '',
        pathname: '/images/media/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
