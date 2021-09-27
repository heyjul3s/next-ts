const withPlugins = require('next-compose-plugins');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  target: 'serverless',
  reactStrictMode: true,
  i18n
};

module.exports = withPlugins([], nextConfig);
