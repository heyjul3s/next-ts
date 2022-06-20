module.exports = {
  ignorePatterns: ['node_modules/', '.next/', '.out/'],
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/ban-ts-ignore': 'off',
    'react-hooks/exhaustive-deps': 0
  }
};
