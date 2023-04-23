/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "asset.cloudinary.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },
  i18n: {
    locales: ["am", "ru"],
    defaultLocale: "ru",
  },
};

module.exports = nextConfig;
