//Custom Cypress Comannds
import '../support/e2e.ts'

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