const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  pageLoadTimeout:60000,
  defaultCommandTimeout:4000,
  retries: {
    runMode: 1,
    openMode: 1,
    },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "video":true,
    "screenshots":true,
    "viewportWidth":1920,
    "viewportHeight":1080,
    baseUrl:'https://register.rediff.com',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    
  },
});
