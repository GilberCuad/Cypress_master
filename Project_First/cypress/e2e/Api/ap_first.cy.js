require('cypress-xpath')
require('cypress-plugin-tab')


describe('Rest Api demo', () => {
  it('Firs test', () => {
    const date = {
      "Name": "GCuadrado",
      "Ap": "Cuadrado",
      "Am": "Cuadrado",
      "Tel": "3423454",
      "Dir": "Colombia",
      "curses": [
        {
          "Name": "js",
          "Description": "program Poo",
        },
        {
          "Name": "Python",
          "Description": "IA",
        },
        {
          "Name": "Java",
          "Description": "Laravel",
        }
      ]

    }

    cy.log(date.Name);
    cy.log(date.Dir);
    cy.log(date.curses[0].Description);
    cy.log(date.curses[2].Name);



  })
})