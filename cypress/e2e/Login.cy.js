/// <reference types="cypress" />

var el = require('../support/elements/ElPage').LOGIN
// const select = require('../support/export.require').select
// var el = require('../support/elements/cadastroCompra').CadastroCompra

describe('Validando pagina de LOGIN', () => {
    beforeEach(() =>{
        cy.Home()
        cy.PageLogin()
    })
    it('Login com SUCESSO', () => {
        cy.SussecLogin('callteste@gmail.com', '123456')
        cy.MensagemOk('Login realizado')
    })
    it('E-mail Invalido', () => {
        cy.SussecLogin('callteste', '123456')
        cy.MensagemErro('E-mail inválido.')
    })
    it('E-mail Invalido', () => {
        cy.SussecLogin('callteste@gmail.com', '123')
        cy.MensagemErro('Senha inválida.')
    })
    
})