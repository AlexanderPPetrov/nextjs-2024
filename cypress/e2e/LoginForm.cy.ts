describe('Login form', () => {
    it('Should login the user', () => {
        cy.visit('/');
        cy.get('[data-testid="login-email"]').type("apetrov@uni-plovdiv.bg")
        cy.get('[data-testid="login-password"]').type('123456');
        cy.get('[data-testid="login-button"]').click();
        cy.get('.invalid-feedback').should('not.be.visible')
    });

    it("Should validate the input fields", () => {
        cy.visit('/');
        cy.get('[data-testid="login-email"]').type("123123123123")
        cy.get('[data-testid="login-password"]').type('123');
        cy.get('.invalid-feedback').should('be.visible')
    })
});