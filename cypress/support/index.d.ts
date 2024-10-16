declare namespace Cypress {
    interface Chainable {
      visitLoginPage: () => void;
      userLogin: () => void;
      clickLogin: () => void;
      visitDashboardPage: () => void;
    }
  }