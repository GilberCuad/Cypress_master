import 'cypress-xpath';
import 'cypress-plugin-tab';

describe('Pruebas carga de archivos por json', () => {

  before(() => {
    cy.fixture('example').then((data) => {
      Cypress.env('squareJson', data)
    })

    // before(() => {
    //   cy.fixture("example").as("squareJson")
    // })
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('add file from json', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq', 'DEMOQA')


    const data = Cypress.env('squareJson');
    cy.get('#userName').should('be.visible').type(data.name);
    cy.get('#userEmail').should('be.visible').type(data.email);
    cy.get('#currentAddress').should('be.visible').type(data.body);


    // cy.get("@squareJson").then((data) => {
    //   cy.get('#userName').should('be.visible').type(data.name);
    //   cy.get('#userEmail').should('be.visible').type(data.email);
    //   cy.get('#currentAddress').should('be.visible').type(data.body);
    // })
  })
})