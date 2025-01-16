const { title } = require('process');

Cypress.on('uncaught:exception', (err, runnable) => {
  // hace que cypress omita las excepciones
  return false
});
require('cypress-plugin-tab');
require("@4tw/cypress-drag-drop");
require("cypress-xpath")


describe("tables", () => {
  it("invoke primer input", () => {
    cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
    cy.title().should("eq", "Input Validation")
    cy.get(".page-body > :nth-child(5)").invoke("text").as("info")
    // podemos usar el alias del elemento
    cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.")

    cy.get("[for='firstname']").invoke("text").as("title_name")
    cy.get("@title_name").should("contain", "First name:").then(() => {
      cy.get("#firstname").type("Gilber")
    })
  })


  it("invoke primer input - paso 2", () => {
    cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
    cy.title().should("eq", "Input Validation")
    cy.get(".page-body > :nth-child(5)").invoke("text").as("info")
    // podemos usar el alias del elemento
    cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.")

    // con el attr estamos capturando el atributo
    cy.get("[for='firstname']").invoke("attr", "style", "color:Blue; font-size: 45px").as("title_name")

  })

  it.only("invoke primer input - paso 3 ocultar y mostrar elementos", () => {
    cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
    cy.title().should("eq", "Input Validation")
    cy.get(".page-body > :nth-child(5)").invoke("text").as("info")
    cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.")

    cy.get("[for='firstname']").invoke("hide").as("title_name")

    cy.wait(1500)

    cy.get("[for='firstname']").invoke("show", "2s").as("title_name")


  })


  it.only("invoke primer input - paso 3 ocultar y mostrar elementos", () => {
    cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
    cy.title().should("eq", "Input Validation")
    cy.get(".page-body > :nth-child(5)").invoke("text").as("info")
    cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.")

    cy.get("[for='surname']").invoke("hide")
    cy.get("#surname").invoke("hide")

    cy.get("#firstname").should("be.visible").type("Gilber Cuadrado").then(() => {
      cy.get("[for='surname']").invoke("show", "3s")
      cy.get("#surname").invoke("show", "3s")
      cy.wait(1500)
      cy.get("#surname").type("Cuadrado laiton")
    })





  })
})