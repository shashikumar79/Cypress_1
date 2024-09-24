const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const mochawesomeReporter = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    env: {
      "Url": "https://practice.expandtesting.com/login",
      "username": "practice",
      "password": "SuperSecretPassword!",

      "url1":"https://testautomationpractice.blogspot.com/",
    },
  
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      on('task', { downloadFile });
      
      on('task', {
        hello({ greeting, name }) {
          console.log('%s, %s', greeting, name);
          return null;
        },
      });

      allureWriter(on, config);
      mochawesomeReporter(on);
      return config;
    }
  },

  video: true,
  screenshots: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
});
