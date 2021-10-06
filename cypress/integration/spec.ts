
describe("Spec 1 tests", () => {
  it('loads examples', () => {
    cy.visit('/');
    cy.get('h2').should('have.text', "hello")
    cy.url()
    cy.get('button').click()
    cy.get(".number-display").should('have.text', '1')
  });

  describe("a11y", () => {
    beforeEach(() => {
      cy.injectAxe()
    })
    it("should have no accessibility errors!!!!", () => {
      cy.checkA11y()
    })
  })
})





