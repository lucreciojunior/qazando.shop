export const LOGIN = {
    BtLogin: '.right_list_fix > :nth-child(1) > a',
    CampoLogin: '#user',
    CampoSenha: '#password',
    BtLoginEntra: '#btnLogin',
    BtOk: '.swal2-confirm',
}

export const CADASTRO = {
    BtCadastro: '.right_list_fix > :nth-child(2) > a',
    CampoNome: '#user',
    CampoEmail: '#email',
    CampoSenha: '#password',
    btRegistrar: '#btnRegister',
}

export const CONTACT = {
    Pages: 'a[id="menuHome"]',  //Pages
    CustDashboard: 'a[id="item0"]',
    AboutUs: 'a[id="item1"]',
    Contact: 'a[id="item2"]', //Contact Us Two
    ContctNome: 'input[placeholder="Name"]',
    ContactEmail: 'input[placeholder="Email"]',
    ContactPhone: 'input[placeholder="Phone"]',
    ContactSubject: 'input[placeholder="Subject"]',
    contactMessage: 'textarea[placeholder="Message"]',
    BtSubimit1: 'button[value="Submit"]', //Submit
    BtOk: '.swal2-confirm' //OK
}

export const FAVORITOS = {
    IconFavoritos: ':nth-child(1) > .offcanvas-toggle > .fa',
    TitleBarraLateral: '.offcanvas-title',
    IconDelete1: '.offcanvas-wishlist > :nth-child(1) > .text-right > .offcanvas-wishlist-item-delete > .fa',
    BtViewWis: '#offcanvas-wishlish > div.offcanvas-wishlist-wrapper > ul.offcanvas-wishlist-action-button > li > a',
    BtAddCart: '.product_addcart > .theme-btn-one', // Add to cart
    IconDelete2: ':nth-child(1) > .product_remove > .fa',
}

export const CARRINHO = {
    IconCarrinho: ':nth-child(2) > .offcanvas-toggle > .fa',
    TitleCart: '.offcanvas-add-cart-wrapper > .offcanvas-title'
}