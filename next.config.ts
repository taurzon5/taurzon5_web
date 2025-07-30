
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
  webpack: (config, { isServer }) => {
    // Add a rule to handle PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource', // Webpack 5 way to handle assets directly
      generator: {
        filename: 'static/media/[name].[hash][ext]', // Output path for the PDF
      }
  },
};

module.exports = nextConfig;
