Cypress.on('uncaught:exception', (err, runnable) => {
  // hace que cypress omita las excepciones
  return false
});



describe("Function Only for test executed", () => {

  it("test page down function", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should('eq', 'DEMOQA');

    cy.get('#userName').type('{pagedown}');
    cy.wait(2000)
  });

  // para solo seleccionar que ciertos casos de prueba se ejecuten dentro del escenario, se usa la función Only

  it.only("test page up function", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should('eq', 'DEMOQA');

    cy.get('#userName').type('{pageup}');
    cy.wait(2000)
  });

})