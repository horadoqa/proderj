# PLANO DE TESTE DE SOFTWARE

**Projeto:** Sistema de Cadastro de Clientes\
**Documento:** Plano de Teste\
**Versão:** 1.0\
**Data:** 15/11/2026\
**Status:** Em elaboração\
**Responsável:** Equipe de Qualidade de Software (QA)

---

# 1\. Identificação do Projeto

| Campo | Descrição |
| --- | --- |
| Nome do projeto | Sistema de Cadastro de Clientes |
| Empresa | Empresa Exemplo Ltda. |
| Área responsável | Tecnologia da Informação |
| Sistema | Sistema Web de Cadastro de Clientes |
| Versão do sistema | 1.0 |
| Responsável pelo projeto | Gerente de Projetos |
| Responsável pelos testes | Analista de QA |
| Data de elaboração | 15/11/2026 |

**Descrição do projeto:**

O projeto consiste no desenvolvimento de um sistema web que permitirá realizar o cadastro, consulta, alteração e exclusão de clientes.

O sistema deverá armazenar informações como nome, CPF, telefone, e-mail e endereço, garantindo a integridade e a segurança dos dados.

# 2\. Objetivos dos Testes

O objetivo principal é verificar se o sistema atende aos requisitos estabelecidos e funciona corretamente.

**Objetivos específicos:**

- Validar o funcionamento das funcionalidades.
- Identificar erros e falhas no sistema.
- Verificar a integridade dos dados cadastrados.
- Testar campos obrigatórios e validações.
- Verificar a segurança e o acesso ao sistema.
- Garantir que os resultados estejam de acordo com o esperado.

# 3\. Escopo dos Testes

## 3.1 Funcionalidades que serão testadas

- Login e autenticação.
- Cadastro de clientes.
- Consulta de clientes.
- Alteração de dados.
- Exclusão de clientes.
- Validação de CPF.
- Validação de e-mail.
- Campos obrigatórios.
- Mensagens de sucesso e erro.

## 3.2 Funcionalidades fora do escopo

- Integração com sistemas externos.
- Aplicativo para dispositivos móveis.
- Relatórios financeiros.
- Integração com plataformas de pagamento.

# 4\. Requisitos e Funcionalidades

| Código | Requisito | Descrição | Prioridade |
| --- | --- | --- | --- |
| RF001 | Login | Permitir acesso ao sistema | Alta |
| RF002 | Cadastro | Permitir cadastrar clientes | Alta |
| RF003 | Consulta | Permitir consultar clientes | Alta |
| RF004 | Alteração | Permitir editar dados | Média |
| RF005 | Exclusão | Permitir excluir clientes | Média |
| RF006 | Validação de CPF | Validar formato e dígitos do CPF | Alta |
| RF007 | Validação de e-mail | Verificar formato do e-mail | Média |

# 5\. Cenários e Casos de Teste

Os casos de teste descrevem as ações que serão executadas para verificar se cada funcionalidade está funcionando corretamente.

## CT001 – Testar login válido

- **Objetivo:** verificar se o usuário consegue acessar o sistema.
- **Pré-condição:** usuário cadastrado e ativo.
- **Procedimento:** informar usuário e senha válidos e clicar em Entrar.
- **Resultado esperado:** acesso permitido ao sistema.
- **Prioridade:** Alta.

## CT002 – Testar login inválido

- **Objetivo:** verificar o tratamento de credenciais incorretas.
- **Pré-condição:** usuário cadastrado.
- **Procedimento:** informar uma senha incorreta.
- **Resultado esperado:** sistema deve negar o acesso e apresentar mensagem de erro.
- **Prioridade:** Alta.

## CT003 – Cadastrar cliente corretamente

- **Objetivo:** verificar o cadastro de um cliente.
- **Pré-condição:** usuário autenticado.
- **Procedimento:** preencher todos os campos obrigatórios com dados válidos e clicar em Salvar.
- **Resultado esperado:** cliente cadastrado com sucesso.
- **Prioridade:** Alta.

## CT004 – Cadastrar cliente sem nome

- **Objetivo:** verificar a validação do campo nome.
- **Pré-condição:** usuário autenticado.
- **Procedimento:** deixar o campo nome vazio e tentar salvar.
- **Resultado esperado:** sistema deve impedir o cadastro e informar que o nome é obrigatório.
- **Prioridade:** Alta.

## CT005 – Informar CPF inválido

- **Objetivo:** verificar a validação do CPF.
- **Pré-condição:** usuário autenticado.
- **Procedimento:** informar um CPF inválido e tentar salvar.
- **Resultado esperado:** sistema deve apresentar mensagem de CPF inválido.
- **Prioridade:** Alta.

## CT006 – Consultar cliente cadastrado

- **Objetivo:** verificar a consulta de clientes.
- **Pré-condição:** existir pelo menos um cliente cadastrado.
- **Procedimento:** pesquisar um cliente pelo nome ou CPF.
- **Resultado esperado:** sistema deve apresentar os dados correspondentes.
- **Prioridade:** Alta.

## CT007 – Alterar dados do cliente

- **Objetivo:** verificar a edição de informações.
- **Pré-condição:** existir cliente cadastrado.
- **Procedimento:** alterar o telefone e salvar.
- **Resultado esperado:** sistema deve atualizar os dados corretamente.
- **Prioridade:** Média.

## CT008 – Excluir cliente

- **Objetivo:** verificar a exclusão de um cadastro.
- **Pré-condição:** existir cliente cadastrado e usuário com permissão.
- **Procedimento:** selecionar o cliente e solicitar a exclusão.
- **Resultado esperado:** sistema deve solicitar confirmação e executar a exclusão conforme as regras definidas.
- **Prioridade:** Média.

# 6\. Responsáveis pela Execução

| Responsável | Função | Atividade |
| --- | --- | --- |
| João Silva | Analista de QA | Elaborar e executar testes |
| Maria Santos | Desenvolvedora | Corrigir erros encontrados |
| Carlos Oliveira | Gerente de Projetos | Acompanhar o cronograma |
| Ana Costa | Analista de Negócios | Validar requisitos |
| Pedro Lima | Usuário-chave | Realizar testes de aceitação |

_Os nomes são fictícios e utilizados apenas para exemplificar o documento._

# 7\. Ambiente e Ferramentas Utilizadas

## 7.1 Ambiente de testes

| Item | Configuração |
| --- | --- |
| Ambiente | Homologação |
| Sistema operacional | Windows 11 |
| Navegador | Google Chrome |
| Banco de dados | PostgreSQL |
| Aplicação | Sistema Web |
| Servidor | Ambiente de homologação |

## 7.2 Ferramentas

- **Jira:** gerenciamento de tarefas e defeitos.
- **Postman:** testes de APIs.
- **Selenium:** automação de testes.
- **Excel:** controle dos casos de teste.
- **Google Chrome:** execução dos testes no navegador.

# 8\. Cronograma de Testes

| Atividade | Data prevista | Responsável |
| --- | --- | --- |
| Planejamento | 16/11/2026 | Analista de QA |
| Preparação do ambiente | 17/11/2026 | Desenvolvedor |
| Elaboração dos casos | 18/11/2026 | Analista de QA |
| Execução dos testes | 19 a 20/11/2026 | Analista de QA |
| Correção dos defeitos | 23/11/2026 | Desenvolvedor |
| Reteste | 24/11/2026 | Analista de QA |
| Aprovação final | 25/11/2026 | Gerente de Projetos |

# 9\. Critérios de Aprovação e Reprovação

## 9.1 Critérios de aprovação

Um teste será considerado aprovado quando:

- A funcionalidade executar corretamente.
- O resultado obtido corresponder ao resultado esperado.
- Não forem identificados erros que comprometam a funcionalidade.
- Os dados forem armazenados corretamente.
- As validações estiverem funcionando conforme os requisitos.

## 9.2 Critérios de reprovação

Um teste será considerado reprovado quando:

- A funcionalidade não executar.
- O resultado for diferente do esperado.
- O sistema permitir informações inválidas.
- Ocorrer perda ou inconsistência de dados.
- Existirem erros que comprometam o funcionamento do sistema.

## 9.3 Critério para aprovação do sistema

O sistema poderá ser recomendado para implantação quando:

- Todos os testes críticos estiverem aprovados.
- Os defeitos críticos e altos estiverem corrigidos.
- Os testes de regressão forem concluídos.
- A área responsável validar os resultados.

# 10\. Relatório dos Resultados

Esta seção deverá ser preenchida após a execução dos testes.

**Exemplo de relatório de execução:**

| Caso | Funcionalidade | Resultado | Status |
| --- | --- | --- | --- |
| CT001 | Login válido | Acesso realizado | Aprovado |
| CT002 | Login inválido | Mensagem apresentada | Aprovado |
| CT003 | Cadastro de cliente | Cadastro realizado | Aprovado |
| CT004 | Cadastro sem nome | Sistema permitiu salvar | Reprovado |
| CT005 | CPF inválido | Validação realizada | Aprovado |
| CT006 | Consulta de cliente | Cliente localizado | Aprovado |
| CT007 | Alteração de dados | Dados atualizados | Aprovado |
| CT008 | Exclusão de cliente | Exclusão realizada | Aprovado |

## 10.1 Resumo dos resultados

| Indicador | Quantidade |
| --- | --- |
| Total de testes executados | 8 |
| Testes aprovados | 7 |
| Testes reprovados | 1 |
| Testes pendentes | 0 |

**Percentual de aprovação:** 87,5%.

## 10.2 Defeito identificado

**Identificação:** BUG-001

- **Descrição:** sistema permite cadastrar cliente sem informar o nome.
- **Caso relacionado:** CT004.
- **Severidade:** Alta.
- **Status:** Aberto.
- **Responsável pela correção:** Equipe de Desenvolvimento.
- **Ação necessária:** corrigir a validação do campo nome e executar novamente o teste.

## 10.3 Conclusão dos testes

Com base nos resultados apresentados, o sistema obteve 87,5% de aprovação nos testes executados.

Foi identificada uma falha relacionada à obrigatoriedade do campo nome, que deverá ser corrigida pela equipe de desenvolvimento.

Após a correção, será necessário executar novamente o caso CT004 e realizar testes de regressão para garantir que as demais funcionalidades continuam funcionando corretamente.

**Recomendação:** o sistema ainda não deve ser considerado aprovado para implantação até que a falha identificada seja corrigida e validada.

---

# 11\. Aprovação do Documento

| Responsável | Nome | Assinatura | Data |
| --- | --- | --- | --- |
| Analista de QA | João Silva | \_\_\_\_\_\_\_\_\_\_ | **_/_**/\_\_\_ |
| Desenvolvedor | Maria Santos | \_\_\_\_\_\_\_\_\_\_ | **_/_**/\_\_\_ |
| Gerente de Projetos | Carlos Oliveira | \_\_\_\_\_\_\_\_\_\_ | **_/_**/\_\_\_ |
| Usuário-chave | Pedro Lima | \_\_\_\_\_\_\_\_\_\_ | **_/_**/\_\_\_ |

**Fim do documento.**

## Como utilizar esse documento na prática

Esse exemplo pode servir como base para projetos reais. É importante entender que o Plano de Teste e o Relatório de Teste são coisas relacionadas, mas diferentes:

- Plano de Teste: define antecipadamente o que será testado, como, quando e por quem.
- Relatório de Teste: apresenta o que aconteceu durante a execução, quais testes passaram, quais falharam e quais problemas foram encontrados.

Minha recomendação: utilize esse modelo como documento inicial e mantenha a seção 10 atualizada conforme os testes forem executados.

Também posso transformar esse exemplo em um modelo profissional de Plano de Teste para Word, com capa, sumário, tabelas padronizadas e campos editáveis.