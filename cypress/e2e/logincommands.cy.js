/// <reference types="cypress" />

describe('Login Test commands', () => {
    beforeEach(() => {
        cy.visit('https://notes-serverless-app.com/login')
    });
    it('Realizar o login', () => {
        cy.login('lecosta12@hotmail.com','A#ula281')  
    });
});