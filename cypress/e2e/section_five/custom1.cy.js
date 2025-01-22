Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

require('cypress-xpath')
require('cypress-plugin-tab')


describe('custom personalized', () => {
  let time = 1000

  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq', 'DEMOQA')
    cy.wait(time)
  });


  it('demo one', () => {
    cy.text_visible("#userName", "Gilber Cuadrado", 1000)
  })

  it('Demo two', () => {
    cy.text_visible_xpath("//*[@id='userEmail']", "Juan Cuadro", 3000)
  });

  it('Demo three', () => {
    cy.Button_click("#submit", 2000)
  });

  it.only('Demo four', () => {
    cy.Tools_QA("Gilber Cuadrado", "cuadradopruebas@qa.co", "address 1", "address 2", 100)
  });

})