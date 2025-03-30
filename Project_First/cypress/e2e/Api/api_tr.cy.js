const { bind } = require('bluebird');

require('cypress-xpath')
require('cypress-plugin-tab')


describe('Rest Api demo GET', () => {
  let data;

  it('Firs test GET', () => {
    data = cy.request("http://localhost:3000/");
    data.its("status").should("equal", 200);
  })

  it('Firs test GET 2', () => {
    data = cy.request("http://localhost:3000/")
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Firs test GET 3', () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json"
      }
    }).then(response => {
      let body;
      body = JSON.parse(JSON.stringify(response.body))
      cy.log(body)
      expect(body[0]).has.property("title", "json-server");
      expect(body[3]).has.property("author", "Cuadrado 4");

    })
  })
})