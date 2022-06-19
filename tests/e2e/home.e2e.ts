describe('Home', () => {
  describe('Search', () => {
    it('displays a card with searched post title', () => {
      const postTitle = 'sapiente omnis fugit eos';

      cy.visit('/', { failOnStatusCode: false }).wait(1000);

      cy.findByLabelText('Search')
        .type(postTitle, { force: true })
        .should('have.value', postTitle);

      cy.findByText(postTitle).should('exist');
    });
  });
});
