// los hooks nos ayuda a no repetir codigo, para esto vamos a ver los hooks en cypress

require('cypress-plugin-tab');

describe("Hooks", () => {
  before(() => {
    cy.log("Esto inicia antes de todo")
  })

  beforeEach(() => {
    cy.log("Esto se repite en cada uno de los test")
    cy.visit("https://demoqa.com/")
  })

  afterEach(() => {
    cy.log("Esto se repite despues de cada test")
  })

  after(() => {
    cy.log("------------------final de todo---------------------")
  })

  it("test uno", () => {
    cy.log("test 1")
  })

  it("test dos", () => {
    cy.log("test 1")
  })
})