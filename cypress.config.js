const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  pageLoadTimeout:60000,
  defaultCommandTimeout:4000,
  // retries: {
  //   runMode: 0,
  //   openMode: 0,
  //   },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    "video":true,
    "screenshots":true,
    "viewportWidth":1920,
    "viewportHeight":1080,
    
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    
  },
});
