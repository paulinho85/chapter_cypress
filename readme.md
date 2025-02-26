- Projeto de automação de testes e2e utilizando a framework Cypress

- Esse projeto teve como objetivo realizar a automação de testes com Cypress para o site: "https://automationexercise.com/".

- Foram realizados os seguintes test cases já propostos no site:
    Test Case 1: Register User
    Test Case 2: Login User with correct email and password
    Test Case 3: Login User with incorrect email and password
    Test Case 4: Logout User
    Test Case 5: Register User with existing email
    Test Case 6: Contact Us Form
    Test Case 8: Verify All Products and product detail page
    Test Case 9: Search Product
    Test Case 10: Verify Subscription in home page    
    Test Case 15: Place Order: Register before Checkout

- Os testes foram realizados com foco na utilização de "Page Object" com "Fluent Pages".

- Utilização do "Allure Report" para geração de relatórios

- Requisitos
    Visual Studio Code
    Node.js
    Java JDK (versão 8 ou superior)


- Configuração
    npm install - comando a ser executado via terminal para instalar as dependências do projeto

    npm run test:allure - comando para execução dos testes em modo Headless onde não são apresentados os testes sendo executados em tela, apenas um relatório final contendo as informações referente aos testes

    npm cypress open - comando para execução dos testes em modo Headfull onde é possível acompanhar a interface executando os testes





