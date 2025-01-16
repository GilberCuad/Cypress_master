Cypress.on('uncaught:exception', (err, runnable) => {
  // hace que cypress omita las excepciones
  return false
});
require('cypress-plugin-tab');

describe("First asserts for page", () => {
  it("Test assert exercise 1", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should('eq', 'DEMOQA');

    // tomamos la funcion para que valide cuando el campo sea visible
    cy.get("#firstName").should("be.visible").type("Gilber Cuadrado");
    cy.get("#lastName").should("be.visible").type("Laiton");
    cy.get("#userEmail").should("be.visible").should("be.enabled").type("Cuadrado@gmial.com");


  })
})