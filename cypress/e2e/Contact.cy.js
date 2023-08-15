/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

var el = require('../support/elements/ElPage').CONTACT

describe('Testando pagina para entra em contatos', () => {
    beforeEach(() =>{
        cy.Home()
        cy.PageLogin()
        cy.SussecLogin('callteste@gmail.com', '123456')
        cy.MensagemOk('Login realizado')
        cy.get('.swal2-confirm').click()
        cy.get('li').should('be.visible').find('#item2').click({force: true})
    })
    it('Contato com sucesso', () => {
        cy.get(el.ContctNome).type(faker.name.firstName())
        cy.get(el.ContactEmail).type(faker.internet.email())
        cy.get(el.ContactPhone).type(faker.phone.phoneNumber())
        cy.get(el.ContactSubject).type(faker.commerce.department())
        cy.get(el.contactMessage).type(faker.random.words())

        cy.contains(el.BtSubimit1, 'Submit').click()
        cy.MensagemOk('Thank You')
    })

    it('Campo NOME obrigatorio', () => {
        cy.get(el.ContactEmail).type(faker.internet.email())
        cy.get(el.ContactPhone).type(faker.phone.phoneNumber())
        cy.get(el.ContactSubject).type(faker.commerce.department())
        cy.get(el.contactMessage).type(faker.random.words())

        cy.contains(el.BtSubimit1, 'Submit').click()

        cy.contains(el.BtSubimit1, 'Submit').click()
        cy.VerificarCampoObrigatorio(el.ContctNome, 'Preencha este campo.')
    })
    it('Campo E-MAIL obrigatorio', () => {
        cy.get(el.ContctNome).type(faker.name.firstName())
        cy.get(el.ContactPhone).type(faker.phone.phoneNumber())
        cy.get(el.ContactSubject).type(faker.commerce.department())
        cy.get(el.contactMessage).type(faker.random.words())

        cy.contains(el.BtSubimit1, 'Submit').click()
        
        cy.VerificarCampoObrigatorio(el.ContactEmail, 'Preencha este campo.')
    })
    it('Campo PHONE obrigatorio', () => {
        cy.get(el.ContctNome).type(faker.name.firstName())
        cy.get(el.ContactEmail).type(faker.internet.email())
        cy.get(el.ContactSubject).type(faker.commerce.department())
        cy.get(el.contactMessage).type(faker.random.words())

        cy.contains(el.BtSubimit1, 'Submit').click()
        
        cy.VerificarCampoObrigatorio(el.ContactPhone, 'Preencha este campo.')
    })
    it('Campo SUBJECT obrigatorio', () => {
        cy.get(el.ContctNome).type(faker.name.firstName())
        cy.get(el.ContactEmail).type(faker.internet.email())
        cy.get(el.ContactPhone).type(faker.phone.phoneNumber())
        cy.get(el.contactMessage).type(faker.random.words())

        cy.contains(el.BtSubimit1, 'Submit').click()
        
        cy.VerificarCampoObrigatorio(el.ContactSubject, 'Preencha este campo.')
    })
    
})