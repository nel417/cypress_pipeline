it('loads examples', () => {
  cy.visit('/');
  cy.get('h1').should('have.text', "Replace me with something relevant")
  cy.url()
  cy.get('button').click()
  cy.get(".number-display").should('have.text', '1')
});
