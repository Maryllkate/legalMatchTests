declare namespace Cypress {
    interface Chainable {
      visitDemoPage: () => void;
      uncaughtError: () => void;
    }
  }