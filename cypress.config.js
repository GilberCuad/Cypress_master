const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    // agregamos para que al navegar evite los CORS y navegue bajo un mismo dominio
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
