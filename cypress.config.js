const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  pageLoadTimeout:120000,
  defaultCommandTimeout:4000,
  // retries: {
  //   runMode: 0,
  //   openMode: 0,
  //   },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      
      on('task', {
        hello({ greeting, name }) {
          console.log('%s, %s', greeting, name)

          return null
        },
      })
    },
  },
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
    
    
  
});
