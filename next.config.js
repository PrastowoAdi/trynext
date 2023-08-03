/** @type {import('next').NextConfig} */

const webpack = (config) => {
  config.module.rules.push({
    test: /\.node/,
    use: "raw-loader",
  });

  return config;
};

module.exports = {
  webpack,
  reactStrictMode: true,
};
