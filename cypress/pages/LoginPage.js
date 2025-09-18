class LoginPage{
 
    PreencherEmail(username){

        cy.get('#email').type(username)

    }

    PreencherSenha(password){
        cy.get("#password").type(password)

    }

    Submit(){
        cy.get('button[type="submit"]').click()

    }

}

export default LoginPage;