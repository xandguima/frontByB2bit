describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  })
  it('should see Logout button after login and cookies exist', () => {

    cy.get('input[type="email"]').type('cliente@youdrive.com')

    cy.get('input[type="password"]').type('password')

    cy.contains('button', 'Sign In').click();
    cy.wait(2000);

    cy.getCookie('accessToken').should('exist');
    cy.contains('button', 'Logout').should('be.visible');
  })


 
})
describe('logout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  })
  it('should cookies not exist after logout', () => {

    cy.get('input[type="email"]').type('cliente@youdrive.com');

    cy.get('input[type="password"]').type('password');

    cy.contains('button', 'Sign In').click();
    cy.wait(2000);
    cy.getCookie('accessToken').should('exist');
    cy.contains('button', 'Logout').click();
    cy.wait(2000);
    cy.getCookie('accessToken').should('not.exist');
  })
})
