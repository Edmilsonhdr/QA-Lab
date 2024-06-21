import LoginPage from "../pages/login_page";
const loginPage = new LoginPage();

Given(/^que eu queira acessar o sistema$/, () => {
  loginPage.acessarHomePage();
});

When(/^eu inserir meu login e senha$/, () => {
  loginPage.preencherDadosNaTela();
});

When(/^Clicar no botao entrar$/, () => {
  loginPage.clickEmLogin();
});

Then(/^tenho meu acesso realizado com sucesso$/, () => {
  return true;
});

When(/^eu inserir meu login "([^"]*)" e senha "([^"]*)"$/, (args1, args2) => {
  console.log(args1, args2);
  return true;
});

Then(/^tenho meu acesso "([^"]*)"$/, (args1) => {
  console.log(args1);
  return true;
});
