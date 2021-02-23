/// <reference types="cypress" />

context('Admin', () => {
  beforeEach(() => {
    cy.visit('/#/admin')
    
  })

  describe('Admin tests', () => {
    it('should log in an admin user', () => {
      
      cy.get('[data-testid="username"]')
      .type('admin')
      cy.get('[data-testid="password"]')
      .type('password')
      cy.get('[data-testid="submit"]')
      .click()
      cy.get('#createRoom').should('be.visible')
    });
  });
});
