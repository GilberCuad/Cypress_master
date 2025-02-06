import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit demoqa", () => {
  cy.visit("https://demoqa.com/text-box");
});

When("I upload name", () => {
  cy.get('#userName').should('be.visible').type('Gilber Cuadrado');
});

When("I upload email", () => {
  cy.get('#email').should('be.visible').type('Gilber@pruebas.com');
});

When("I upload address", () => {
  cy.get('#currentAddress').should('be.visible').type('Dirección prueba');
});

Then("I validate name the page", () => {
  cy.title().should('eq', 'DEMOQA');
});
