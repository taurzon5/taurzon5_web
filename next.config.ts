import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/taurzon5_web",
  assettPrefix: "/taurzon5_web",
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Often helpful for static exports
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
