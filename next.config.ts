import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? '/taurzon5_web' : '',
  assettPrefix: isProd ? '/taurzon5_web' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Often helpful for static exports
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
