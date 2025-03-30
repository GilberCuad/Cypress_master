/// <reference types="Cypress" />
require('cypress-xpath');

describe("Nueva seccion checkbox", () => {
  it('check uno', () => {
    cy.visit("https://stevefaulkner.github.io/html-mapping-tests/browser-tests/checkbox-states.html")
    cy.xpath("/html/body/input[1]").check();
    cy.xpath("/html/body/input[2]").check();
    cy.get("#in").check();

    cy.get("#in").uncheck();



    // cy.title().should("Trustpilot Custom Widget")

  });
})