import { keys } from 'cypress/types/lodash';
import * as users from '../fixtures/users.json'

context('Sample Google Search test', () => {
    beforeEach(() => {
        cy.setCookie('CONSENT', 'YES+NL.en+V9+BX')
        cy.visit('https://www.google.com');
    });

    it('should search google for the user', () => {
        cy.searchGoogleWithText(users[0].name);
        cy.get('#result-stats').should('be.visible');
    });
})