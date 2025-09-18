/// <reference types="cypress" />

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

describe('Teste com Page Object', () => { 
    const homePage= new HomePage();
    const loginPage= new LoginPage();
    it('Testar parte do login', () => {
        homePage.visit();
        loginPage.PreencherEmail('lecosta12@hotmail.com')
        loginPage.PreencherSenha('A#ula281')
        loginPage.Submit()

        
    });
});