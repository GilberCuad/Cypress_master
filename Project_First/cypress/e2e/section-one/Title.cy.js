/// <reference types="Cypress"/>
// referencia para ayuda en los comandos que se relacionan de cypress
// npx cypress open

Cypress.on('uncaught:exception', (err, runnable) => {
  // hace que cypress omita las excepciones
  return false
})

describe("Sección 1 > Validate title", () => {
  it("test validation", () => {
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq', 'DEMOQA')
    // la funcion should ayuda a buscar la referencia de un titulo en la page
    cy.log("Ok tittle function")
  })
});