declare namespace Cypress {
    interface Chainable {
      visitDemoPage: () => void;
      setTimeout: (duration: number) => void;
      uncaughtError: () => void;
      validateHomeLink: () => void;
      validateInteractionLink: (actionName: string) => void;
      validateWidgetLink:(widgetName: string) => void;
      validateDynamicElement: (elementText: string) => Chainable<string>;
      visitRegistrationForm: () => void;
      fillUpForm: (Data) => void;
      clickFreeLifetimeMembership: () => void;
      scrollToCarousel: () => void;
    }
  }