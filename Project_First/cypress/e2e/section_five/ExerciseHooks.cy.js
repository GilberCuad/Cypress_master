require('cypress-xpath')
require('cypress-plugin-tab')


describe('Hooks examples', () => {
  let time = 1500;

  before(() => {
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq', 'DEMOQA')
    cy.wait(time)
  });



  it('test One', () => {
    cy.get('#userName').should('be.visible').type('Gilber Cuadrado')
    cy.wait(time)
  })

  it('test Two', () => {
    cy.get('#currentAddress').should('be.visible').type('Esto es una prueba por robot')
    cy.wait(time)
  })

  after(() => {
    cy.log("------------------final de todo---------------------")
  })
})