// use .env for url in different test server or prod
describe('visit automation demo page', () => {
    it('should load the page', () => {
        //check the command.ts under support
        cy.visitDemoPage();
        cy.uncaughtError();
    });
});
describe('', () => {
    
});