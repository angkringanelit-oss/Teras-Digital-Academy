import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname
  },
  distDir: '.next',
};

export default nextConfig;