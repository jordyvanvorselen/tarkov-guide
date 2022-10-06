const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      "cypress-watch-and-reload": {
        watch: ["static/src/js/components/**/*.js"],
      },
    },
    specPattern: "cypress/features/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:8000",
    setupNodeEvents(on, config) {
      return require("cypress-watch-and-reload/plugins")(on, config);
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
