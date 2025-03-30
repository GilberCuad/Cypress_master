require('cypress-plugin-tab');
require('cypress-xpath');


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe("selectors exercise", () => {
  it("test selector id", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should('eq', 'DEMOQA');

    cy.get("#userName").should("be.visible").type("Ing Gilber");

  });

  it("test selector atrubutes form", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should('eq', 'DEMOQA');
    // añadimos elementos como atributos como el placeholder
    cy.get("[placeholder='Full Name']").should("be.visible").type("Cuadrado :)");
  });

  it("test selector xpath", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should('eq', 'DEMOQA');
    // añadimos elementos como atributos como el placeholder
    cy.xpath("/html/body/div[2]/div/div/div/div[2]/div[2]/form/div[1]/div[2]/input").should("be.visible").type("Cuadrado :)");
  });


  it("test selector contains", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should('eq', 'DEMOQA');

    // buscamos en los elementos dentro de una clase determinada un label por ejemplo en los checks, para este caso todos contienen la misma clase pero se referencia por Female
    cy.get(".custom-control-label").contains("Female").click();
  });

  it.only("test selector copySelector", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should('eq', 'DEMOQA');

    // desde el DOM podemos copiar el selector que se encuentra junto a los xpath
    cy.get("#userNumber").should("be.visible").type(4445215);
    cy.wait(3000);
  });

})