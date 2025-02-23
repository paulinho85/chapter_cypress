const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false, 
  

  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      hideXhr: true
    }

  },  
});
