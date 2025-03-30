/// <reference types="Cypress" />
import "cypress-file-upload"

describe("Selects", () => {
  it('check uno', () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "ToolsQA")


    // subir la imagen

    const ruta = img1.jpg
    cy.get('[type="file"]').attachFile(ruta)
    cy.wait(2000)

  });

})