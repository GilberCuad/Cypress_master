Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

require('cypress-xpath')
require('cypress-plugin-tab')


describe('', () => {
  let time = 2000;

  beforeEach('', () => {
    cy.visit('')
    cy.title('').should('eq', '')
    cy.wait(time)
  })


  it('Assertion', () => {
    cy.get("idmessageerror").should("be.visible").then((value) => {
      let date = value.text();
      console.log(date)
      // capturamos el mensaje de error, para realizar assertions
    })
  })
})