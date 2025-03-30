import { faker } from '@faker-js/faker';


require('cypress-xpath')
require('cypress-plugin-tab')


describe('Rest Api demo POST', () => {

  it('Firs test POST', () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        "id": 5,
        "body": "insert from cypress",
        "postId": 4
      }
    }).then(response => {
      expect(response.status).to.eql(201)
    })
  })


  it('Insert multiple values POST', () => {

    for (let i = 1; i <= 10; i++) {
      const name = faker.vehicle.type();
      const authorF = faker.person.lastName();

      cy.request({
        method: "POST",
        url: "http://localhost:3000/posts",

        body: {
          "id": 15 + i,
          "title": name,
          "author": authorF
        }
      }).then(response => {
        expect(response.status).to.eql(201)
      })
    }
  })
})