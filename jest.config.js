const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // * Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// * Add any custom config to be passed to Jest
const customJestConfig = {
  testMatch: ['**/tests/(integration|unit)/**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^@/requests(.*)$': '<rootDir>/src/requests/$1',
    '^@/components(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks/$1',
    '^@/pages(.*)$': '<rootDir>/src/pages/$1',
    '^@/state(.*)$': '<rootDir>/src/state/$1',
    '^@/theme(.*)$': '<rootDir>/src/theme/$1',
    '^@/public(.*)$': '<rootDir>/public/$1',
    '^@/utils(.*)$': '<rootDir>/src/utils/$1'
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  collectCoverage: true,

  // * Uncomment if you wish to apply test threshold
  // coverageThreshold: {
  //   global: {
  //     branches: 90,
  //     functions: 90,
  //     lines: 90,
  //     statements: 90
  //   }
  // },

  // * Add more setup options before each test is run
  // * setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // * if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  prettierPath: '<rootDir>/prettier.config.js'
};

// * createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
