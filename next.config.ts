const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/taurzon5_web',
  assetPrefix: '/taurzon5_web/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    return config;
  },
};

module.exports = nextConfig;
