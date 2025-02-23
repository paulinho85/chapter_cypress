const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  watchForFileChanges: false, 
  

  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {      
      allureWriter(on, config);
      return config;
    },

    env: {
      hideXhr: true
    }

  },  
});
