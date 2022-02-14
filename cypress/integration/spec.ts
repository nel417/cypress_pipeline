describe("Spec 1 tests", () => {
  it('loads examples', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', "Coffee")
    cy.get('button').click()
    cy.get(".number-display").should('have.text', '1')
  });

  describe("a11y", () => {
  function terminalLog(violations) {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length
      })
    )

    cy.task('table', violationData)
  }
    beforeEach(() => {
      cy.injectAxe()
    })

    it("should have no accessibility errors!!!!", () => {
      cy.checkA11y(null, null, terminalLog)
    })
  })
})
