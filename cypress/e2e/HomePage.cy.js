describe('Home Page Test', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.contains('Start Quiz'); // Update with your actual title if needed
  });
});
