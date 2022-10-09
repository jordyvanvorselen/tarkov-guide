describe("when the user arrives on the home page", () => {
  it("he sees the quest selector", () => {
    cy.visit("/");

    cy.get(".quest-selector");
  });

  it("he can filter the quests based on name", () => {
    cy.visit("/");

    const questSelector = cy.get(".quest-selector");

    questSelector.get("input[placeholder*='Filter quests']").type("Operati");

    questSelector.contains("Operation Aquarius - Part 1").should("be.visible");
    questSelector.contains("Shortage").should("not.exist");
  });

  it("he can select multiple quests", () => {
    cy.visit("/");

    const questSelector = cy.get(".quest-selector");

    const firstQuest = questSelector.contains("Painkiller").click();
    const secondQuest = questSelector.contains("Shortage").click();

    firstQuest.should("have.class", "selected");
    secondQuest.should("have.class", "selected");
  });
});
