// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

import "cypress-plugin-snapshots/commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
require("cypress-watch-and-reload/support");

beforeEach(() => {
  cy.intercept(
    {
      method: "GET",
      url: "/quests",
    },
    [
      {
        id: 1,
        name: "Shortage",
        trader: "Therapist",
        maps: ["Shoreline", "Factory", "Lighthouse", "Reserve", "Interchange"],
        coordinates: [
          { x: 250, y: 400 },
          { x: 1200, y: 250 },
          { x: 500, y: 600 },
        ],
      },
      {
        id: 2,
        name: "Painkiller",
        trader: "Therapist",
        maps: ["Customs", "Woods", "Shoreline", "Factory", "Lighthouse"],
        coordinates: [
          { x: 500, y: 250 },
          { x: 1050, y: 500 },
          { x: 200, y: 700 },
        ],
      },
      {
        id: 3,
        name: "Operation Aquarius - Part 1",
        trader: "Therapist",
        maps: ["Customs"],
        coordinates: [
          { x: 600, y: 600 },
          { x: 1000, y: 550 },
          { x: 200, y: 500 },
        ],
      },
    ]
  ).as("getQuests");
});
