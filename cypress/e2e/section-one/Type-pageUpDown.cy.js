Cypress.on('uncaught:exception', (err, runnable) => {
  // hace que cypress omita las excepciones
  return false
});

describe("Type page Up function - mover arriba-abajo", () => {
  it("test page up function", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should('eq', 'DEMOQA');

    cy.get('#userName').type('{pageup}');
    cy.wait(2000)
  });

  it("test page down function", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should('eq', 'DEMOQA');

    cy.get('#userName').type('{pagedown}');
    cy.wait(2000)
  });

})