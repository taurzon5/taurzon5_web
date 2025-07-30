const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/taurzon5_web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/taurzon5_web/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
