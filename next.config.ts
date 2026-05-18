import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'image.thum.io' },
      { protocol: 'https', hostname: 's0.wp.com' },
      { protocol: 'https', hostname: 's.wordpress.com' },
    ],
  },
};

export default nextConfig;
