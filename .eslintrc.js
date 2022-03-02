module.exports = {
  ignorePatterns: ['node_modules/', '.next/', '.out/'],
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  rules: {
    'no-unused-vars': 'error'
  }
};
