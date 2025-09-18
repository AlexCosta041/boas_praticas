Cypress.Commands.add('search',term=>{
 cy.get('input[type="text"]').should('be.visible')
 .clear()
 .type(`${term}{enter}`)
})

Cypress.Commands.add('login',(username,password)=>{

    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get('button[type="submit"]').click()


})