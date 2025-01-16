/// <reference types="Cypress" />
require('cypress-xpath');

describe("Selects", () => {
  it('check uno', () => {
    cy.visit("https://automationpractice.com/index.php");
    cy.title().should("eq", "Selenium Easy - JQuery Dual List Box Demo")

  });

  it("select multiples", () => {
    // dentro de un div, buscamos un contenedor > buscamos un titulo dentro del contenedor
    cy.get("#id").contains("Wonmen")
  })
})