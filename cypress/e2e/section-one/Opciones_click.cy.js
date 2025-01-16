Cypress.on('uncaught:exception', (err, runnable) => {
  // hace que cypress omita las excepciones
  return false
});
require('cypress-plugin-tab');

describe("clicks functions", () => {
  it("clicks functions test", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.title().should('eq', 'OrangeHRM');

    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").type("Admin");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").type("admin123");
    cy.get(".oxd-button").should("be.visible").click();
    cy.get(":nth-child(3) > .oxd-main-menu-item").click();
  });

  it("clicks forcer test", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.title().should('eq', 'OrangeHRM');

    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").type("Admin");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").type("admin123");
    // esta funcion es para forzar un click por si existe problemas con respecto a la identificacion del elemento
    cy.get(".oxd-button").should("be.visible").click({ force: true });
    cy.get(":nth-child(3) > .oxd-main-menu-item").click();

  });


  it("clicks foor locations (coordenadas)", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.title().should('eq', 'OrangeHRM');

    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").type("Admin");
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").should("be.visible").type("admin123");
    cy.get(".oxd-button").should("be.visible").click();
    cy.wait(1500);
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should("be.visible").click(50, 5);

  });
});
