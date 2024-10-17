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
      verifySpecificSlideInCarousel: (text: string) => void;
      goToNextSlide: () => void;
      clickGetStarted: () => void;
      processPayment: () => void;
      clickEnrollToCourseButton: () => void;
      orderSummary: () => void;
      personalInformation: () => void;
      checkoutButton: () => void;
    }
  }