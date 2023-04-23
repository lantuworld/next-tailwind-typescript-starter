///<reference path="../../node_modules/cypress/types/cypress-global-vars.d.ts"/>
describe('Seo metadata', () => {
  describe('Verify SEO Metadata', () => {
    it('should render SEO metadata on Index page', () => {
      cy.visit('/');

      // The Index page should have a page title
      cy.title().should('not.be.empty');

      // The Index page should also contain a meta description for SEO
      cy.get('head meta[name="description"]')
        .invoke('attr', 'content')
        .should('not.be.empty');
    });
  });
});
