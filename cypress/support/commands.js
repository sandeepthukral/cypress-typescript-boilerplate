Cypress.Commands.add('setGoogleCookie', () => {
  cy.setCookie('CONSENT', 'YES+NL.en+V9+BX');
})

Cypress.Commands.add('searchGoogleWithText', (query) =>  {
  return cy.get('[name="q"]').type(query).type('{enter}');
});
