export const fixCypressSpec = (filename) => () => {
  const path = require("path");
  const projectRoot = Cypress.config("projectRoot");
  const absolute = path.join(projectRoot, filename);
  Cypress.spec = {
    absolute,
    name: path.basename(filename),
    filename,
  };
};
