describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('http://localhost:5173/');

    cy.get('input[type="email"]').type('cliente@youdrive.com')

    cy.get('input[type="password"]').type('password')

    cy.contains('button', 'Sign In').click();

    cy.contains('button', 'Logout').should('be.visible');

   
  })
})