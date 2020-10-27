describe('My First Test', () => {
  it('clicking "Article" navigates to a new route', () => {
    cy.visit('http://localhost:8000');

    cy.contains('Article').click();

    cy.url().should('include', '/blog');

    cy.contains('Second Blog Post').click();
  });
});
