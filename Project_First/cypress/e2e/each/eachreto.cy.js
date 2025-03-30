Cypress.on('uncaught:exception', (err, runnable) => {
  // hace que cypress omita las excepciones
  return false
});
require('cypress-plugin-tab');
require("@4tw/cypress-drag-drop");
require('cypress-xpath');

describe("Selects", () => {
  it('each  uno', () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.title().should("eq", "My Shop");
    let timeOut = 2000;
    cy.wait(timeOut)

    for (let i = 0; i < 3; i++) {
      cy.get(".product_list grid row .product-name").eq(i).click({ force: true })
      cy.wait(timeOut);
    }
  })
})