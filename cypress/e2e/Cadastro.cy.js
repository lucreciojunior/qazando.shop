/// <reference types="cypress" />

var el = require('../support/elements/ElPage').CADASTRO

describe('Validando pagina de CADASTRO', () => {

    beforeEach(() =>{
        cy.Home()
        cy.PageCadastro()
    })
    it('Cadastro com SUCESSO', () => {
        cy.get(el.CampoNome).type('Teste')
        cy.get(el.CampoEmail).type('callteste@gmail.com')
        cy.get(el.CampoSenha).type(123456)

        cy.contains(el.btRegistrar, 'Cadastrar').click()
        cy.get('.swal2-title').should('have.text', 'Cadastro realizado!')
    })
    it('Cadastro sem NOME', () => {
        cy.get(el.CampoEmail).type('callteste@gmail.com')
        cy.get(el.CampoSenha).type(123456)

        cy.contains(el.btRegistrar, 'Cadastrar').click()
        cy.MensagemErroCadastro('O campo nome deve ser prenchido')
    })
    it('Cadastro sem E-MAIL', () => {
        cy.get(el.CampoNome).type('Teste')
        cy.get(el.CampoSenha).type(123456)

        cy.contains(el.btRegistrar, 'Cadastrar').click()
        cy.MensagemErroCadastro('O campo e-mail deve ser prenchido corretamente')
    })
    it('Cadastro sem SENHA', () => {
        cy.get(el.CampoNome).type('Teste')
        cy.get(el.CampoEmail).type('callteste@gmail.com')

        cy.contains(el.btRegistrar, 'Cadastrar').click()
        cy.MensagemErroCadastro('O campo senha deve ter pelo menos 6 dígitos')
    })
    it('Cadastro sem os DADOS', () => {
        cy.contains(el.btRegistrar, 'Cadastrar').click()
        cy.MensagemErroCadastro('O campo nome deve ser prenchido')
    })
    
})