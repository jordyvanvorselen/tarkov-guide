describe("when the user arrives on the home page", () => {
  it("he sees the quest selector", () => {
    cy.visit("/");

    cy.get(".quest-selector");
  });
});
