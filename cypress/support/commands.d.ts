// tslint:disable-next-line:no-namespace
declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to type in a google search query.
       * @example cy.typeGoogleSearchText('greeting')
       */

     searchGoogleWithText(query: string): Chainable<JQuery>

     /**
      * Custom command to set Google Tracking Cookie consent
      */
     setGoogleCookie(): void
    }
  }