/// <reference types="cypress" />
var el = require('../support/elements/ElPage').FAVORITOS

//Validando pagina de produtos favoritos
//Validando pagina FAVORITOS
//Excluindo os produtos na barra lateral dos FAVORITOS
//Validando pagina de Favoritos sem PRODUTOS
//Adicionando um produto dos FAVORITOS no Carrinho
//Deletando produtos na pagina principal dos FAVORITOS

describe('Validando pagina de produtos favoritos', () => {
    beforeEach(() =>{
        cy.Home()
        cy.get(el.IconFavoritos).click()
    })
    it('Validando barra lateral FAVORITOS', () => {
        cy.contains(el.TitleBarraLateral, 'Wishlist').should('be.visible').wait(1200)
    })
    it('Validando pagina FAVORITOS', () => {
            cy.contains(el.TitleBarraLateral, 'Wishlist').should('be.visible')
            cy.get(el.BtViewWis).click()
            cy.contains('a[href="/wishlist"]', 'wishlist').wait(1200)
        })
    it('Excluindo os produtos na barra lateral dos FAVORITOS', () => {
        cy.contains(el.TitleBarraLateral, 'Wishlist').should('be.visible')
        cy.get(el.IconDelete1).click()
        cy.get(el.IconDelete1).click()
        cy.get(el.IconDelete1).click()
        cy.get(el.IconDelete1).click()
    })
    it('Validando pagina de Favoritos sem PRODUTOS', () => {
        cy.contains(el.TitleBarraLateral, 'Wishlist').should('be.visible')
        cy.get(el.IconDelete1).click()
        cy.get(el.IconDelete1).click()
        cy.get(el.IconDelete1).click()
        cy.get(el.IconDelete1).click()
        cy.get(el.BtViewWis).click()
        cy.contains('h2', 'YOUR WISHLIST IS EMPTY').should('be.visible').wait(1200)
    })
    it('Adicionando um produto dos FAVORITOS no Carrinho', () => {
        cy.contains(el.TitleBarraLateral, 'Wishlist').should('be.visible')
        cy.get(el.BtViewWis).click()
        cy.contains(el.BtAddCart, 'Add to cart').click()
        cy.contains(el.BtAddCart, 'Add to cart').click()
    });
    it('Deletando produtos na pagina principal dos FAVORITOS', () => {
        cy.contains(el.TitleBarraLateral, 'Wishlist').should('be.visible')
        cy.get(el.BtViewWis).click()
        cy.get(el.IconDelete2).click()
        cy.get(el.IconDelete2).click()
        cy.get(el.IconDelete2).click()
        cy.get(el.IconDelete2).click()
        cy.contains('h2', 'YOUR WISHLIST IS EMPTY').should('be.visible').wait(1200)
    });
})