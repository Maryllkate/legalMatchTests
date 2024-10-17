//Custom Cypress Comannds
import '../support/e2e.ts'
import actions from '../fixtures/actions.json';

const baseUrl = Cypress.env('baseUrl');

Cypress.Commands.add('visitDemoPage', () => {
    cy.visit(`${baseUrl}/demo.html#`);
  });

  Cypress.Commands.add('uncaughtError', () => { //can also use in global files, check e2e.ts
    // Catch and handle mixed content errors
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Mixed Content')) {
          // Prevent Cypress from failing the test on mixed content errors
          return false;
      }
  });
  })

  Cypress.Commands.add('validateHomeLink', () => {
    cy.get('li > a[href="demo.html"]').click();
  });

  Cypress.Commands.add('validateInteractionLink', (actionName: string) => {
    const action = actions.interaction.find((a: string) => a === actionName);
    if (action) {
      // Click the link that matches the action name
      cy.get('li > ul.dropdown > li > a').contains(action).click();
  } else {
      throw new Error(`Action "${actionName}" not found in actions.json`);
  }
  })