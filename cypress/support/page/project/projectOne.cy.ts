export class ProjectOne {

  visitHome() {
    before(() => {
      cy.visit('https://demoqa.com/text-box')
      cy.title().should('eq', 'DEMOQA')
      cy.wait(1000)
    })
  }
}