describe('Chat Flow', () => {
  it('logs in and sends a message', () => {
    cy.visit('/login');
    cy.get('input[placeholder="Email"]').type('test@test.com');
    cy.get('input[placeholder="Password"]').type('password');
    cy.get('button').contains('Login').click();
    cy.url().should('include', '/chat');
    cy.get('input[placeholder="Type a message..."]').type('Hello world!');
    cy.get('button').contains('Send').click();
    cy.contains('Hello world!');
  });
}); 