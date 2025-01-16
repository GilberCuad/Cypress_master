require('cypress-xpath')
require('cypress-plugin-tab')


describe('challenge', () => {
  let time = 1000;
  // before(() => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.title().should('eq', 'OrangeHRM')
  //   cy.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input").should('be.visible').type("Admin")
  //   cy.wait(time)
  //   cy.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input").should('be.visible').type("admin123")
  //   cy.wait(time)
  //   cy.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button").click();
  // });

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq', 'OrangeHRM')
    cy.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input").should('be.visible').type("Admin")
    cy.wait(time)
    cy.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input").should('be.visible').type("admin123")
    cy.wait(time)
    cy.xpath("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button").click();
  });

  it('Hola tes', () => {
    cy.xpath("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a").click();
  });

  it('Hola tes 2', () => {
    cy.xpath("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[10]/a").click();

  });

  it('Hola tes 3', () => {
    cy.xpath("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[12]/a").click();

  });



})