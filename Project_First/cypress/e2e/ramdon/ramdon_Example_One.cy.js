require('cypress-xpath')
require('cypress-plugin-tab')
import { faker } from '@faker-js/faker';


Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


describe('Metodos de carga por ramdoms', () => {

  let time = 300;
  let number_test = 10;

  it('test random', () => {
    for (let num = 1; num <= number_test; num++) {

      const name = faker.person.firstName();
      const email = faker.internet.email();

      cy.visit("https://demoqa.com/text-box"),
        cy.title().should('eq', 'DEMOQA'),
        cy.get("#userName").should("be.visible").type(name),
        cy.wait(time),
        cy.get("#userEmail").should("be.visible").type(email),
        cy.wait(time)
    }
  })
})