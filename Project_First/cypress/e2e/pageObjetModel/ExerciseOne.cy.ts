import { ProjectOne } from "../../support/page/project/projectOne.cy";
import 'cypress-xpath';
import 'cypress-plugin-tab';


describe('Page object model', () => {
  let projectIndex: ProjectOne;

  beforeEach(async () => {
    projectIndex = new ProjectOne()
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('call to method', () => {
    projectIndex.visitHome();
    projectIndex.section_one();
  })
})