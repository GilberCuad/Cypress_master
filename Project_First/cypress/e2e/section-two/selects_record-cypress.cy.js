require('cypress-xpath')
require('cypress-plugin-tab')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('select input', () => {

  it('visit page demo select input', () => {
    cy.visit("https://demoqa.com/select-menu");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000)
  })
})