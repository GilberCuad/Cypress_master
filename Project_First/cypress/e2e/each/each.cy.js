Cypress.on('uncaught:exception', (err, runnable) => {
  // hace que cypress omita las excepciones
  return false
});
require('cypress-plugin-tab');
require("@4tw/cypress-drag-drop");
require('cypress-xpath');

describe("Selects", () => {
  it('each  uno', () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.title().should("eq", "My Shop");
    cy.wait(1500)
    // para recorrer un contenedor y obtener los nombres de los contenedores hijos por ejemplo de una tienda de ropa

    cy.get(".product-name").each(($el, index, $list) => {
      // las propiedades dentro de each son definidas, el primero muestra localizaciones de los productos dentro de esa clase, el segundo el indice, y el tercero la lista
      let vestido = $el.text()
      cy.log("Nombre de los vestidos recorridos: " + vestido)
    })
  });


  it('each  dos', () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.title().should("eq", "My Shop");
    cy.wait(1500)


    cy.get(".product-name").each(($el, index, $list) => {
      // las propiedades dentro de each son definidas, el primero muestra localizaciones de los productos dentro de esa clase, el segundo el indice, y el tercero la lista
      let vestido = $el.text()

      // vestido.includes("Printed Chiffon Dress"
      if (vestido.includes("Printed Chiffon Dress")) {

        cy.wait(3000)
        cy.wrap($el).click({ force: true })

        cy.wait(2000)
        cy.get("#group_1").select("M");
        cy.xpath("//*[@id='color_16']").click()
        cy.wait(2000)
        cy.get("#quantity_wanted").clear();
        cy.get("#quantity_wanted").type("4", { force: true });

        cy.xpath("//*[@id='add_to_cart']/button").click({ force: true })

        cy.xpath("//*[@id='layer_cart']/div[1]/div[2]/div[4]/span/span").click();

        cy.xpath("//*[@id='columns']/div[1]/a").click()
      }


    })
  });
})