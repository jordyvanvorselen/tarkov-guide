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

  it("he can select and deselect quests", () => {
    cy.visit("/");

    const quest = cy.contains(".quest", "Painkiller");

    quest.click();

    quest.should("have.class", "selected");

    quest.click();

    quest.should("not.have.class", "selected");
  });

  it("he can select multiple quests", () => {
    cy.visit("/");

    const firstQuest = cy.contains(".quest", "Painkiller");
    const secondQuest = cy.contains(".quest", "Shortage");

    firstQuest.click();
    secondQuest.click();

    firstQuest.should("have.class", "selected");
    secondQuest.should("have.class", "selected");
  });
});
