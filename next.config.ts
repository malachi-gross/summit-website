import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/summit-website',  // Uncomment for GitHub Pages deployment
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
