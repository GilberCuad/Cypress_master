Cypress.on('uncaught:exception', (err, runnable) => {
  // hace que cypress omita las excepciones
  return false
});

require('cypress-plugin-tab');


describe("Function tab", () => {

  it("test tab function", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should('eq', 'DEMOQA');

    cy.get('#firstName').type('Gilber').tab('Cuadrado');

    cy.wait(2000)

    cy.get('#firstName').focused().tab();
  });

})