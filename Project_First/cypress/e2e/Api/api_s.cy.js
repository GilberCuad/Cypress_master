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
})