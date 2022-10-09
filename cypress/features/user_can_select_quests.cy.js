describe("when the user arrives on the home page", () => {
  it("he sees the quest selector", () => {
    cy.visit("/");

    cy.get(".quest-selector");
  });

  it("he can filter the quests based on name", () => {
    cy.visit("/");

    cy.get(".quest-selector")
      .get("input[placeholder*='Filter quests']")
      .type("Operati");

    cy.contains(".quest", "Operation Aquarius - Part 1").should("be.visible");
    cy.contains(".quest", "Shortage").should("not.exist");
  });

  it("he can select multiple quests", () => {
    cy.visit("/");

    const firstQuest = cy.contains(".quest", "Painkiller").click();
    const secondQuest = cy.contains(".quest", "Shortage").click();

    firstQuest.should("have.class", "selected");
    secondQuest.should("have.class", "selected");
  });
});
