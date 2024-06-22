/// <reference types="Cypress" />
import LoginPage from "../pages/login_pages";
const loginPage = new LoginPage();
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(/^eu acesse a página home da aplicação$/, () => {
  loginPage.accessHomePage();
});

When(
  /^eu inserir meu email "([^"]*)" e minha senha "([^"]*)"$/,

  (email, password) => {
    console.log(email, password);
    loginPage.accessLoginPage();
    loginPage.fillLoginInfo(email, password);
  }
);

When(/^clicar no botão entrar$/, () => {
  loginPage.submitLogin();
});

Then(/^tenho meu acesso "([^"]*)"$/, (message) => {
  console.log(message);
});
