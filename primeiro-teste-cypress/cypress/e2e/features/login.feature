Feature: Login
Login para acesso ao AP

    Scenario: Login com secesso
        Given que eu queira acessar o sistema
        When eu inserir meu login e senha
        And Clicar no botao entrar
        Then tenho meu acesso realizado com sucesso

    Scenario: Login com secesso
        Given que eu queira acessar o sistema
        When eu inserir meu login "<login>" e senha "<senha>"
        And Clicar no botao entrar
        Then tenho meu acesso "<mensagem>"

        Examples:
        | login | senha | mensagem |
        | danilo | 1234 | login com sucesso |
        | amanda | 0987 | login com senha incorreta |

    