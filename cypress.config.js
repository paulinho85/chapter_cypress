const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  watchForFileChanges: false, 
  

  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },

    env: {
      hideXhr: true,      
    }

  },  
});
