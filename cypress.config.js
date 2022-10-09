const { defineConfig } = require("cypress");
const { initPlugin } = require("cypress-plugin-snapshots/plugin");

module.exports = defineConfig({
  e2e: {
    env: {
      "cypress-watch-and-reload": {
        watch: ["static/src/js/components/**/*.js"],
      },
      "cypress-plugin-snapshots": {
        imageConfig: {
          threshold: 0.01,
          thresholdType: "pixel",
        },
      },
    },
    specPattern: "cypress/features/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:8000",
    setupNodeEvents(on, config) {
      initPlugin(on, config);
      return require("cypress-watch-and-reload/plugins")(on, config);
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    excludeSpecPattern: ["**/__snapshots__/*", "**/__image_snapshots__/*"],
  },
});
