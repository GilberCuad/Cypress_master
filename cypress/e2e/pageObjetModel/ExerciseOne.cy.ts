import { ProjectOne } from "../../support/page/project/projectOne.cy";

require('cypress-xpath')
require('cypress-plugin-tab')


describe('Page object model', () => {
  let projectIndex: ProjectOne;

  beforeEach(async () => {
    projectIndex = new ProjectOne()
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  let time = 1000;

  it('call to method', () => {
    projectIndex.visitHome();
  })
})