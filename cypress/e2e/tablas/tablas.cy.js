/// <reference types="Cypress" />
import "cypress-file-upload"

describe("tables", () => {
  it('tomando un grupo de elementos desde el elemento padre', () => {
    cy.visit()

    cy.get(".btm-group").children(".btn-success")

    // accediendo a los botones hijos

    cy.get(".btn-group".children(".btn-success")).should("contain", "Green").click({ force: true });

    // recorrer los elementos de una tabla

    let datos = [];

    cy.get("#class-main").each(($el, index, $list) => {
      datos[index] = $el.text();
    }).then(() => {
      for (let i = 0; i <= datos.length; i++) {
        cy.log(datos[i])
      }
    })

  });


  it("", () => {
    // para recorrer y extrar un valor x de la tabla

    const campo = cy.get("classMain");

    campo.each(($el, index, $list) => {
      campo.eq(index).next().next.then((age) => {
        const Edad = age.text();
        cy.log(Edad)
        expect(Edad).to.equal("39");
      })
    })
  })

})