//Custom Cypress Comannds
/* Not advisable to use Xpath however the test system has no data-component keys >.<
*/
import '../support/e2e.ts'
import actions from '../fixtures/actions.json';

const baseUrl = Cypress.env('baseUrl');

 Cypress.Commands.add('visitDemoPage', () => {
    cy.visit(`${baseUrl}/demo.html#`);
  });

  Cypress.Commands.add("setTimeout", (duration: number) => {
    if (![5, 10, 15].includes(duration)) {
      throw new Error("Invalid duration. Choose 5, 10, or 15 seconds.");
    }
  
    cy.log(`Setting timeout to ${duration} seconds.`);
    Cypress.config("defaultCommandTimeout", duration * 1000); // Convert to milliseconds
  });

  Cypress.Commands.add('uncaughtError', () => { //can also use in global files, check e2e.ts
    // Catch and handle mixed content errors
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Mixed Content')) {
          // Prevent Cypress from failing the test on mixed content errors
          return false;
      }
  });
  });

  Cypress.Commands.add('validateHomeLink', () => {
    cy.get('li > a[href="demo.html"]').click();
  });

  Cypress.Commands.add('validateInteractionLink', (actionName: string) => {
    const action = actions.interaction.find((a: string) => a === actionName);
    if (action) {
      //due to display:none the visibility should have this command
      cy.get('li > a').contains('Interaction').trigger('mouseover');
      // Clicking the link that matches the action name with force option
      cy.get('li > ul.dropdown > li > a').contains(action).click({ force: true });
  } else {
      throw new Error(`Action "${actionName}" not found in actions.json`);
  }
  });

  Cypress.Commands.add('validateWidgetLink', (widgetName) => {
    const action = actions.widget.find((a: string) => a === widgetName);
    if (action) {
      //due to display:none the visibility should have this command
      cy.get('li > a').contains('Interaction').trigger('mouseover');
      // Clicking the link that matches the action name with force option
      cy.get('li > ul.dropdown > li > a').contains(widgetName).click({ force: true });
  } else {
      throw new Error(`Action "${widgetName}" not found in actions.json`);
  }
  });

  Cypress.Commands.add('validateDynamicElement', (elementText) => {
    cy.get('li > .dropdown > li > a')
      .contains(elementText)
      .then($el => {
        // Get the href attribute
        const url = $el.prop('href');
        cy.wrap(url); // Wrap the URL to chain
      });
  });

  /**
   * example for the backend API validation that I mentioned during my interview 
   * with sir axion, sir raoul and sir noah
   */
  Cypress.Commands.add('visitRegistrationForm', () => {
    cy.request({
      url: 'https://way2automation.com/way2auto_jquery/index.php',
      method: 'GET',
    }).then((response) => {
      //Validating the Status Code
      if(response.status === 200) { //exactly equal to 200 from the API response
        cy.visit('https://way2automation.com/way2auto_jquery/index.php');
      } else {
        cy.log(`Failed ${response.status}`)
        throw new Error(`Unexpected status code: ${response.status}`); // throw an exception error
      }
    })
  });

  Cypress.Commands.add('fillUpForm', (Data) => {
    cy.setTimeout(5);
    cy.get('#load_form').within(() => {
      cy.get('input[name="name"]').type(Data.name);
      cy.get('input[name="phone"]').type(Data.phone);

      cy.get('input[name="email"]').type(Data.email);
      cy.get('select[name="country"]').select('Philippines');
      cy.get('input[name="city"]').type(Data.city);
      cy.get('input[name="username"]').type(Data.username);
      cy.get('input[name="password"]').type(Data.password);
      cy.get('input[type="submit"]').click();
  });
  });

  Cypress.Commands.add('clickFreeLifetimeMembership', () => {
    cy.get('button#trigger-popup')
      .contains('EXPLORE LIFETIME MEMBERSHIP')
      .should('be.visible')
      .click();
      cy.get('div#login.popupbox')
      .should('have.css', 'display', 'block');
      cy.get('a.fancybox')
      .should('be.visible')
      .click();
    cy.setTimeout(5);
  });

  Cypress.Commands.add('scrollToCarousel', () => {
    cy.visit('https://www.way2automation.com/lifetime-membership-club');
    cy.get('section[data-id="a6a17e9"]')
      .scrollIntoView()
      .should('be.visible');
    cy.setTimeout(5);
  });