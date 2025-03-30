require('cypress-xpath')
require('cypress-plugin-tab')

describe('Rest Api demo PUT', () => {

  it('Firs test PUT', () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/posts/1",
      body: {
        "id": 1,
        "body": "updating from cypress",
        "postId": 9
      }
    }).then(response => {
      expect(response.status).to.eql(200)
    })
  })


})