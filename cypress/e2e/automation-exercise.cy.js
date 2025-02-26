import 'cypress-plugin-xhr-toggle';
import cadastro from '../pages/cadastro';
import login from '../pages/login';
import menu from '../pages/menu';
import contato from '../pages/contato';
import produtos from '../pages/produtos';
import homepage from '../pages/homepage';
import carrinho from '../pages/carrinho';
import checkout from '../pages/checkout';
import pagamento from '../pages/pagamento';
import conta from '../pages/conta';




describe('Automation Exercise', () => {

    beforeEach(() => {        
        cy.visit('/');        
    });


    it('Test Case 1: Register User', () => {        
        menu.irParaLoginCadastro();       
        cadastro
            .preencherFormulario()
            .verificarSeCadastroFoiConcluido();
    });

    /* it('Test Case 1: Register User', () => {        
        cy.contains('Signup').click();
        const timestamp = new Date().getTime();
        const times = new Date().getMilliseconds();
        const signUpName = 'Paulo R Souza';
        Cypress.env('signUpName', signUpName);
        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'));
        cy.get('[data-qa="signup-email"]').type(`tester-${timestamp}@mail.com`);
        cy.contains('button', 'Signup').click();
        cy.get('input[type=radio]').check('Mrs');
        cy.get('[type=password]').type('1234', { log: false });
        cy.get('[data-qa="days"]').select('30');
        cy.get('[data-qa="months"]').select('12');
        cy.get('[data-qa="years"]').select('1985');
        cy.get('input[type="checkbox"]#newsletter').check();
        cy.get('input[type="checkbox"]#optin').check();
        cy.get('[data-qa="first_name"]').type('Lionel');
        cy.get('[data-qa="last_name"]').type('Messi');
        cy.get('[data-qa="company"]').type('Inter Miami');
        cy.get('[data-qa="address"]').type('Boulevar Street, 704');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('Texas');
        cy.get('[data-qa="city"]').type('Lousiana');
        cy.get('[data-qa="zipcode"]').type('16202-002');
        cy.get('[data-qa="mobile_number"]').type('+5518991585752');
        cy.get('[data-qa="create-account"]').click();
        cy.url().should('includes', 'account_created');
        cy.get('[data-qa="account-created"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'));        
    }); */

    
    

    it('Test Case 2: Login User', () => {        
        menu.irParaLoginCadastro();
        login
            .preencherLogin('paulorsouza@email.com', '6543211')
            .verificarSeLoginFoiRealizado("Paulo R Souza");        
    });


    it('Test Case 3: Login User with incorrect email and password', () => {
        menu.irParaLoginCadastro();
        login
            .preencherLogin('emailincorreto@email.com', '987654')
            .verificarSeLoginFalhou();
    });
    

    it('Test Case 4: Logout User', () => {
        menu.irParaLoginCadastro();
        login
            .preencherLogin('paulorsouza@email.com', '654321')
            .verificarSeLoginFoiRealizado("Paulo R Souza")
            .realizarLogout()
            .verificarSeLogoutFoiRealizado();        
    });


    it('Test Case 5: Register User with existing email', () => {
        menu.irParaLoginCadastro();
        cadastro
            .iniciarCadastro('Paulo R Souza', 'paulorsouza@email.com')
            .verificarFalhaEmailJaUtilizado        
    });


    it('Test Case 6: Contact Us Form', () => {
        menu.irParaContato();                    
        contato
            .verificaSeFormularioCarregou()
            .preencheFormularioContato()
            .anexaArquivoJson()
            .submeteFormulario()
            .verificaSeFormularioFoiSubmetido();        
    });


    it('Test Case 8: Verify All Products and product detail page', () => {
        menu.irParaProdutos();
        produtos
            .verificaSePaginaCarregou()
            .verificaListaContemProdutos()
            .clicaVerProdutoPrimeiroItem()
            .verificaSePaginaProdutoCarregou()
            .verificaDadosProdutoVisivel();            
    });


    it('Test Case 9: Search Product', () => {
        menu.irParaProdutos();
        produtos
            .verificaSePaginaCarregou()
            .buscaProduto("Shirt")
            .verificaListaResultadosVisivel()
            .verificaListaContemProdutos();
    });

    it('Test Case 10: Verify Subscription in home page', () => {
        homepage
            .encontraEVaiNoCampoInscricao()
            .preencheEmailEConfirma('paulorsouza@email.com')
            .verificaInscricaoRealizada();        
    });


    it('Test Case 15: Place Order: Register before Checkout', () => {
        menu.irParaLoginCadastro();       
        cadastro
            .preencherFormulario()
            .verificarSeCadastroFoiConcluido();
        produtos
            .adicionaProdutoNoCarrinho()
            .clicaVisualizarCarrinho();
        carrinho
            .verificaSeCarrinhoVisivel()
            .clicaFazerCheckout();
        checkout
            .verificaPaginaCheckoutVisivel()
            .preencheComentario("Embalar para Presente")
            .clicarEmFazerPedido();
        pagamento
            .preencheDadosCartao()
            .clicaBotaoPagarEConfirmar()
            .verificaSePedidoConfirmado();
        menu.deletarConta();
        conta
            .verificaSeContaFoiDeletada()
            .clicaEmContinuar();
    });


});


