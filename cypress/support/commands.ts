// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '../support/e2e.ts'

const baseUrl = Cypress.env('baseUrl');

Cypress.Commands.add('visitLoginPage', () => {
    cy.visit(`${baseUrl}/login`);
  });

  Cypress.Commands.add('userLogin', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    cy.get('#validationUsername').type(`${username}`);
    cy.get('#validationPassword').type(`${password}`);
  });
  
Cypress.Commands.add('clickLogin', () => {
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('visitDashboardPage', () => {
    cy.visit(`${baseUrl}/dashboard/analytics`);
});