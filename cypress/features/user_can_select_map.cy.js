describe("when the user arrives on the home page", () => {
  it("he sees the customs map by default", () => {
    cy.visit("/");
    cy.get(".map").should("have.class", "customs");
  });
});