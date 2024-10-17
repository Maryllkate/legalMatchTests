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
    it('shoud check the dynamic element', () => {
        cy.validateDynamicElement('Submit Button Clicked').then((url) => {
            cy.log(url);
            expect(url).to.equal('http://www.qa.way2automation.com/');
        });
    });
});
describe('visit Dynamic Element url', () => {
    it('visits the link for Submit Button Clicked', () => {
        cy.visit({
            url: 'http://www.qa.way2automation.com',
            method: 'POST'
        });
    });
});
describe('visit Registration Form', () => {
    it('should visit the Dummy Registration Form', () => {
        cy.visitRegistrationForm();
    });
    it('should fill up the information', () => {
        cy.fillUpForm();
    });
});
