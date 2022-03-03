const path = require('path');
const DIR_PATH = path.join.bind(this, __dirname);

module.exports = {
  stories: ['../src/stories/*.stories.@(js|mdx|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.filename) : true
    }
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.mjsx?$/,
            include: /node_modules/,
            type: 'javascript/auto'
          }
        ]
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': '@emotion/react',
          'emotion-theming': '@emotion/react',
          '@/requests': DIR_PATH('../src/requests'),
          '@/components': DIR_PATH('../src/components'),
          '@/hooks': DIR_PATH('../src/hooks'),
          '@/pages': DIR_PATH('../src/pages'),
          '@/state': DIR_PATH('../src/state'),
          '@/theme': DIR_PATH('../src/theme'),
          '@/public': DIR_PATH('../public'),
          '@/utils': DIR_PATH('../src/utils')
        }
      }
    };
  }
};
