require('cypress-xpath');
require('cypress-plugin-tab');

describe("Snippets configuration and use", () => {
  it("invoke test", () => {
    let time = 1500;

    cy.visit("https://demoqa.com/text-box");
    cy.title().should('eq', 'ToolQA')
    cy.wait(time);


    cy.get("#userName").should("be.visible").type("force");
  })
})