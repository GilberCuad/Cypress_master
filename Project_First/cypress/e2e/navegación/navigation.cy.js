
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe("Navegacion", () => {
  it("Back, forward", () => {
    cy.visit("http://demoqa.com/")
    cy.title().should("eq", "DEMOQA")
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-0 > .text").should("be.visible").click({ force: true })
    cy.go("back")
  })
});
