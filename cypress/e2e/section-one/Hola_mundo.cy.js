Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe("Hello World", () => {
  it("mi primer test", () => {
    cy.log("Helos Alls")
    cy.wait(4000)
  })


  it("Mi segundo test", () => {
    cy.visit('https://demoqa.com/text-box')
    cy.get('#userName').type("Gilber Cuadrado")
  })
})