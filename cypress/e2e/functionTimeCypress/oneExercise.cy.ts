import 'cypress-xpath'
import 'cypress-plugin-tab'

describe('Times sleep for cypress', () => {
  let time = 300;
  // configuracion de time en el archivo cypress.json
  before(() => {
    cy.visit('')
    cy.title().should('eq', '')
    cy.wait(time)
  })

  it('', () => {
    cy.log('Hello')
  })
})