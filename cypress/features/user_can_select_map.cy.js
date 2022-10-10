describe("when the user arrives on the home page", () => {
  it("he sees the lighthouse map by default", () => {
    cy.visit("/");

    cy.get(".map")
      .get("canvas")
      .should("have.class", "lighthouse")
      .should("be.visible")
      .invoke("css", "background-image")
      .should("include", "lighthouse");
  });
});
