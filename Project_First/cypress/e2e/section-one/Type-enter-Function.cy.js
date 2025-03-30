/// <reference types="Cypress"/>
// referencia para ayuda en los comandos que se relacionan de cypress
require('cypress-xpath');
// se importa xpath de cypress para manejar los selectores


Cypress.on('uncaught:exception', (err, runnable) => {
  // hace que cypress omita las excepciones
  return false
});

describe("Type enter function", () => {
  it("test function", () => {
    cy.visit("https://www.google.com/")
    cy.title().should('eq', 'Google')
    cy.wait(1500)

    cy.xpath('//*[@id="APjFqb"]').type("Cypress{enter}");
    // cy.xpath('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3').click();
    //otra forma de dar clic con type
    cy.xpath('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3').type('{enter}');

    cy.wait(2000);

    cy.xpath('/html/body/main/section[1]/div[2]/div/div[2]/a').click();

  })
});