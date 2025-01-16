/// <reference types="Cypress" />
require('cypress-xpath');

describe("Selects", () => {
  it('check uno', () => {
    // visitar pagina
    //cy.get("#id").should("be.visible").select("Friday").should("have.value", "Friday")

  });

  it("select multiples", () => {
    // visitar la pagina
    // el then sirve como promesa en cypress
    // cy.get("#id").should("be.visible").select(["Friday", "Saturday", "Monday"]).should("have.value", "Friday").then(() => { //podemos decirle que haga otra cosa por ejemplo otra acccion por ejemplo: cy.get("#id").should("be.visible").click() })
  })
})