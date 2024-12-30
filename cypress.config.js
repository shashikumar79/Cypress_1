const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const mochawesomeReporter = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  // pageLoadTimeout: 40000,
  // defaultCommandTimeout: 4000,
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    // specPattern:"**/*.feature",
    
    
    env: {
      "Url": "https://practice.expandtesting.com/login",
      "username": "practice",
      "password": "SuperSecretPassword!",

      "url1":"https://testautomationpractice.blogspot.com/",


    
      "Url_1":"https://automationexercise.com/",
      "cookie":"orangehrm=qn6vl8f2qnigub80bol88dlpma"
    },
  
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      on('task', { downloadFile });
      
      on('task', {
        hello({ greeting, name }) {
          console.log('%s, %s', greeting, name);
          return null;
          return require('./cypress/plugins/index.js')(on,config)
        },
      });

      
      mochawesomeReporter(on);
      return config;
    }
  },

  video: true,
  screenshots: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
});
