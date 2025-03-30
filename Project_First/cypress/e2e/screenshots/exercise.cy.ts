import { ProjectOne } from "../../support/page/project/projectOne.cy";
import 'cypress-xpath';
import 'cypress-plugin-tab';

describe('', () => {
  // cuando se ejecuta con el comando run se puede configurara para grabar videos
  // por ejemplo npx cypress run --spec "cypress\e2e\screenshots\exercise.cy.ts"
  let projectIndex: ProjectOne;

  before(() => {
    projectIndex = new ProjectOne()
  })

  it('', () => {
    projectIndex.visitHome();
  })
})