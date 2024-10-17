// use .env for url in different test server or prod
describe('visit automation demo page', () => {
    it('should load the page', () => {
        //check the command.ts under support
        cy.visitDemoPage();
        cy.uncaughtError();
    });
});
describe('validate Home Link', () => {
    it('should check the home link', () => {
        cy.validateHomeLink();
    });
});
describe('validate Interaction Link', () => {
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