// use .env for url in different test server or prod
describe('visit automation demo page', () => {
    it('should load the page', () => {
        //check the command.ts under support
        cy.visitDemoPage();
        cy.uncaughtError();
    });
});
describe('validate Home Category', () => {
    it('should check the home link', () => {
        cy.validateHomeLink();
    });
});
describe('validate Interaction Category', () => {
    it('should check the draggable link', () => {
        cy.validateInteractionLink('Draggable');
    });
    it('should check the droppable link', () => {
        cy.validateInteractionLink('Droppable');
    });
    it('should check the resizeable link', () => {
        cy.validateInteractionLink('Resizable');
    });
    it('should check the selectable link', () => {
        cy.validateInteractionLink('Selectable');
    });
    it('should check the sortable link', () => {
        cy.validateInteractionLink('Sortable');
    });
});
describe('validate Widget Category', () => {
    it('should check the accordion link', () => {
        cy.validateWidgetLink('Accordion');
    });
    it('should check the autocomplete link', () => {
        cy.validateWidgetLink('Autocomplete');
    });
    it('should check the datepicker link', () => {
        cy.validateWidgetLink('Datepicker');
    });
    it('should check the menu link', () => {
        cy.validateWidgetLink('Menu');
    });
    it('should check the slider link', () => {
        cy.validateWidgetLink('Slider');
    });
    it('should check the tabs link', () => {
        cy.validateWidgetLink('Tabs');
    });
    it('should check the tooltip link', () => {
        cy.validateWidgetLink('Tooltip');
    });
});
describe('validate Dynamic Element in Category', () => {
    it('should visit the dynamic element', () => {
        cy.validateDynamicElement('Submit Button Clicked').then((url) => {
            cy.log(url);
            cy.setTimeout(15);
            expect(url).to.equal('http://www.qa.way2automation.com/');
        });
    });
});

describe('visit Registration Form', () => {
    it('should visit the Dummy Registration Form', () => {
        cy.visitRegistrationForm();
    });
    it('should fill up the information', () => {
        it('should fill out the registration form and submit', () => {
            const Data = {
                name: 'John Doe',
                phone: '09123456789',
                email: 'john.doe@example.com',
                city: 'Manila',
                username: 'johndoe',
                password: 'securePassword123'
            };
            cy.fillUpForm(Data);
        });
    });
});
//an ads(chatbox) is popping up during testing here that is why it fails
describe('click Free Lifetime Membership', () => {
    it('should click the Free lifetime membership button', () => {
        cy.setTimeout(5);
        cy.clickFreeLifetimeMembership();
    });
}); 
describe('scroll to the `30+ Courses video library FREE ACCESS`', () => {
    it('should scroll into the carousel feature', () => {
        cy.setTimeout(10);
        cy.scrollToCarousel();
    });
});

describe('Navigate to `Automation Architect Selenium with 7 live projects`', () => {
    const url = 'https://www.way2automation.com/lifetime-membership-club/'
    const carousel = 'Automation Architect Selenium with 7 live projects';

    beforeEach(() => {
        cy.visit(url);
    });

    it('Automation Architect Selenium with 7 live projects Slide', () => {
        cy.setTimeout(5);
        cy.verifySpecificSlideInCarousel(carousel);
    });
    //needs to have a specific time durations for carousel
    it('should navigate to the Automation Architect Selenium slide and validate it', () => {
        cy.setTimeout(5);
        cy.goToNextSlide(); 
        cy.setTimeout(20);
        cy.verifySpecificSlideInCarousel(carousel);
      });
    it('should click the Get Started Button', () => {
        cy.verifySpecificSlideInCarousel(carousel);
        cy.clickGetStarted();
    });
});
describe('enroll in the Course', () => {
    const url = 'https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects';

    beforeEach(() => {
        cy.visit(url);
      });
      it('should select the PAY IN USD payment option', () => {
        cy.processPayment();
        cy.get('#product_id_4632690').should('be.checked');
      });
});
describe('click Enroll to Course Button', () => {
    it('should click the Enroll Course button', () => {
        cy.clickEnrollToCourseButton();
    });
});
describe('verify Order Summary Page', () => {
    it('should fill out the Order Summary Page', () => {
       cy.orderSummary();
    });
    it('should full name & address', () => {
        cy.personalInformation();
    });
    it('click checkout button', () => {
        cy.checkoutButton();
    });
});

