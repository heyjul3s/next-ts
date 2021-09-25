module.exports = {
  ignorePatterns: ['node_modules/', '.next/', '.out/'],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    typescript: {}
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './'
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'prettier'
  ],
  rules: {
    'no-console': { allow: ['warn', 'error'] },
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    'react/react-in-jsx-scope': 'off'
  }
};
