/// <reference types="cypress" />


var el = require('../support/elements/ElPage').LOGIN


//COMMANDS PAGINA HOME/LOGIN
Cypress.Commands.add('Home', () => {
    cy.visit('/')
    cy.viewport(1500, 1020)
    cy.get('.header-logo > .logo > a > img').should('be.visible')
})
Cypress.Commands.add('PageLogin', () => {
    cy.get(el.BtLogin).click()
    cy.get('.account_form > h3').should('be.visible')
      .should('have.text', 'Login')
})
Cypress.Commands.add('SussecLogin', (email, senha, alert) => {
    cy.get(el.CampoLogin).type(email)
    cy.get(el.CampoSenha).type(senha)
    cy.get(el.BtLoginEntra).click()
})
Cypress.Commands.add('MensagemOk', (alert) => {
    cy.get('#swal2-title').should('be.visible')
            .should('have.text', alert)
})     
Cypress.Commands.add('MensagemErro', (alert) => {
    cy.get('.invalid_input').should('be.visible')
            .should('have.text', alert)
})




//COMMANDS PAGINA CADASTRO
Cypress.Commands.add('PageCadastro', () => {
    var el = require('../support/elements/ElPage').CADASTRO

    cy.get(el.BtCadastro).click()
    cy.get('.account_form > h3').should('be.visible')
      .should('have.text', 'Cadastro de usuário')
})
Cypress.Commands.add('MensagemErroCadastro', (alert) => {
    cy.get('#errorMessageFirstName').should('be.visible')
        .should('have.text', alert)
})



//COMMANDS PAGINA CONTACT
Cypress.Commands.add('VerificarCampoObrigatorio', (campo, mensege) => {
    var el = require('../support/elements/ElPage').CONTACT

    cy.get(campo).invoke('prop', 'validationMessage')
        .should((Text) => {
        expect(mensege).to.eq(Text)
        })
})