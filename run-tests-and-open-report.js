const { execSync } = require('child_process');

try {
  // Executa os testes Cypress
  execSync('npx cypress run --env allure=true', { stdio: 'inherit' });
} catch (error) {
  // Se os testes falharem, não vai interromper a execução do próximo comando
  console.error('Testes falharam, mas o relatório será gerado.');
}

// Gera o relatório Allure e abre
execSync('allure generate allure-results --clean -o allure-report', { stdio: 'inherit' });
execSync('allure open allure-report', { stdio: 'inherit' });




//"test:allure": "npm run e2e ; npm run report:allure"