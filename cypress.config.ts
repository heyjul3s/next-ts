import { defineConfig } from 'cypress';

// *Config Reference: https://docs.cypress.io/guides/references/configuration#Configuration-File
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/e2e/**/*.e2e.{js,jsx,ts,tsx}',
    // setupNodeEvents(on, config) {
    // implement node event listeners here
    // },
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: false,
    video: false
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 12000,
  pageLoadTimeout: 120000,
  projectId: 'next-ts',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
    quiet: true
  },
  video: false,
  viewportWidth: 1280,
  viewportHeight: 1024,
  watchForFileChanges: true
});
