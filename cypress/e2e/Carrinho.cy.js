/// <reference types="cypress" />
var el = require('../support/elements/ElPage').CARRINHO

//VALIDANDO PAGINA DO CARRINHO DE COMPRAS
// - APAGANDO UM PRODUTO NA PAGINA PRINCIPAL DO CARRINHO
//VIEW CART - VALIDANDO PRODUTOS QUE FORAM ADCIONADOS NO CARRINHO
// - REMOVENDO PRODUTO DO CARRINHO 
// - VALIDANDO UM COPOM ERRADO
// - LIMPANDO PRODUTOS DO CARRINHO
// - PROCEED TO CHECKOUT - PELO VIEW CART

describe('Carrinho de COMPRA', () => {
    beforeEach(() =>{
        
    })
    it('Validando a pagina carrinho de compra', () => {
        cy.Home()
        cy.get(el.IconCarrinho).click
        cy.get(el.TitleCart).should('have.text', 'Shopping Cart').wait(1200)
    })
    

})