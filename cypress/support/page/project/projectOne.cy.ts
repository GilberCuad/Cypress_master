export class ProjectOne {

  visitHome() {
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq', 'DEMOQA')
    cy.screenshot()
    cy.wait(600)
  }

  section_one() {
    cy.get(".category-cards > :nth-child(1)").click();
    cy.get("#item-0").should("be.visible").click();
    cy.wait(600)
    cy.get("#userName").should("be.visible").type("Gilber Cuadrado")
    cy.get("#userEmail").should("be.visible").type("cuadradopruebas@gmail.com")
    cy.get("#currentAddress").should("be.visible").type("Gilber descripcion")
    cy.get("#submit").should("be.visible").click()
  }

  section_from_json() {

  }
}