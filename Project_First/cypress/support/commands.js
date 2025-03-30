// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('text_visible', (selector, value, time) => {
  cy.get(selector).should('be.visible').type(value)
  cy.wait(time)
})

Cypress.Commands.add('text_visible_xpath', (selector, value, time) => {
  cy.xpath(selector).should('be.visible').type(value)
  cy.wait(time)
})

Cypress.Commands.add('Button_click', (selector, time) => {
  cy.get(selector).should("be.visible").click()
  cy.wait(time)
})

Cypress.Commands.add('Button_click_force', (selector, time) => {
  cy.get(selector).should("be.visible").click({ force: true })
  cy.wait(time)
})

// function multiple

Cypress.Commands.add('Tools_QA', (name, email, dir1, dir2, time) => {
  cy.get("#userName").should('be.visible').type(name)
  cy.wait(time)
  cy.get("#userEmail").should('be.visible').type(email)
  cy.wait(time)
  cy.get("#currentAddress").should('be.visible').type(dir1)
  cy.wait(time)
  cy.get("#permanentAddress").should('be.visible').type(dir2)
  cy.wait(time)
  cy.get("#submit").should("be.visible").click({ force: true })
  cy.wait(time)
})