const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/taurzon5_web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/taurzon5_web/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (
    config,
    {
      buildId,
      dev,
      isForcibleStaticBuild,
      isServer,
      nextRuntime,
      webpack,
    }
  ) => {
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
