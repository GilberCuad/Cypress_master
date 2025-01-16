/// <reference types="Cypress" />
require('cypress-xpath');

describe("Segundo reto", () => {
  it('primer paso', () => {
    cy.visit("http://computer-database.gatling.io/computers")
    cy.title().should("eq", "Computers database")
    cy.wait(1500)

    // realizando una busqueda


    // de esta manera buscamos el id con get y escribimos
    cy.get("#searchbox").type("ACE")
    cy.get("#searchsubmit").should("be.visible")
    cy.get("#add").click();

    // segundo flujo

    cy.get("#name").type("Prueba cuadrado");
    cy.get("#introduced").type("2024/11/10");
    cy.get("#discontinued").type("2024/11/10");
    cy.get("#company").should("be.visible").select("Nokia").should("have.value", "16").wait(1200);
    cy.xpath("//*[@id='main']/form/div/input").should("be.visible").click();

  });
})