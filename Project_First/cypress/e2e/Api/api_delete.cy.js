require('cypress-xpath')
require('cypress-plugin-tab')

describe('Rest Api demo PUT', () => {

  it('Firs test DELETE', () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3000/posts/2",
    }).then(response => {
      expect(response.status).to.eql(200)
    })
  })


  it.only('Firs test DELETE everything', () => {
    for (let i = 1; i < 25; i++) {
      cy.request({
        method: "DELETE",
        url: "http://localhost:3000/posts/" + i,
      }).then(response => {
        expect(response.status).to.eql(200)
      })
    }
  })
})