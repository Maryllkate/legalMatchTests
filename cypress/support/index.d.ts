declare namespace Cypress {
    interface Chainable {
      visitDemoPage: () => void;
      uncaughtError: () => void;
      validateHomeLink: () => void;
      validateInteractionLink: (actionName: string) => void;
      validateWidgetLink:(widgetName: string) => void;
    }
  }