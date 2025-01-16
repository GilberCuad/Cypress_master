require('cypress-plugin-tab');


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe("Test challenge", () => {
  it("Adding the element", () => {
    cy.visit("https://demoqa.com/webtables");
    cy.title().should('eq', 'DEMOQA');
    cy.get("#addNewRecordButton").should("be.visible").click();

    cy.get("#firstName").type("Gilber");
    cy.get("#lastName").type("Cuadrado :)");
    cy.get("#userEmail").type("Cuadrado@gmail.com");
    cy.get("#age").type(21);
    cy.get("#salary").type(1320000);
    cy.get("#department").type("Huilaaa");

    cy.get("#submit").should("be.visible").click();

    // editing the information

    cy.get("#edit-record-4 > svg").click();
    cy.wait(5000);

    cy.get("#department").clear();
    cy.get("#department").type("Cordoba");
    cy.get("#lastName").clear();
    cy.get("#lastName").type("Santana");
    cy.get("#submit").should("be.visible").click();

    cy.wait(5000);
    cy.get("#edit-record-4 > svg").click();
    cy.get(".close > [aria-hidden='true']").click();

    // the element delete

    cy.wait(5000);
    cy.get("#delete-record-4 > svg > path").click();

  });
});

