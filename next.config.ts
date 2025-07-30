
const nextConfig = {
  /* config options here */
  basePath: '/taurzon5_web',
  assettPrefix: '/taurzon5_web',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Often helpful for static exports
  output: "export",
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });
    return config;
  }
};

module.exports = nextConfig;
