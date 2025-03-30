Cypress.on('uncaught:exception', (err, runnable) => {
  // hace que cypress omita las excepciones
  return false
});
require('cypress-plugin-tab');
require("@4tw/cypress-drag-drop");


describe("Selects", () => {
  it('drag  uno', () => {
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    cy.title().should("eq", "The Internet");
    cy.wait(1500)
    cy.get("#column-a").drag("#column-b", { force: true });

    // para hacer hover
    // luego usamos invoke para hacer que un click no se abra en pestañas nuevas haciendo que Cypress no pudiera continuar

    cy.contains("selenium").trigger("mouseover").invoke("removeAttr", "target").click();
  });


  it('insertar fechas', () => {
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    cy.title().should("eq", "The Internet");
    cy.wait(1500)
    cy.get("#id").should("be.visible").type("09/02/2000").then(() => {
      cy.get("#id").should("be.visible").type('{esc}')
    })

    // o, 
    cy.get("#ruta para seleccionar opcion").should("be.visible").click();
    cy.get(".today").click({ force: true })

  })
})