/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
  reactStrictMode: false, // antd issue
  swcMinify: true,
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false };
  //   return config;
  // },
});
