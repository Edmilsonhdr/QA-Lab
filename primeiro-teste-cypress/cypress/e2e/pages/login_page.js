/// <reference types="Cypress" />

import LoginElements from "../elements/login";
const loginElements = new LoginElements();

class LoginPage {
  acessarHomePage() {
    cy.visit("www.site.com.br");
  }

  preencherDadosNaTela() {
    cy.get(loginElements.inputEmail()).type("endereco@email.com");
    cy.get(loginElements.inputPass()).type("senha");
  }

  clickEmLogin() {
    cy.get(loginElements.btnEnter()).click();
  }
}
export default LoginPage;
