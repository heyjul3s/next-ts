import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.feature',
    // setupNodeEvents(on, config) {
    // implement node event listeners here
    // },
    supportFile: 'cypress/support/e2e.js'
  },
  watchForFileChanges: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
    quiet: true
  },

  viewportWidth: 1280,
  viewportHeight: 1024,
  projectId: 'sample',
  chromeWebSecurity: false,
  video: false
});