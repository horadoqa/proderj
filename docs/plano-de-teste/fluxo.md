# Fluxo 

## 1. Como funciona o processo dentro de uma empresa?

Em uma empresa, o Plano de Teste normalmente é elaborado a partir da Análise de Requisitos. Essa é uma das principais entradas para o planejamento dos testes de software.

A lógica é simples: primeiro a empresa define o que o sistema precisa fazer; depois, a equipe de testes planeja como verificar se essas necessidades foram atendidas.

O fluxo mais comum é:

1. Levantamento de Requisitos

Identificação das necessidades do cliente.

2. Análise de Requisitos

Definição das regras de negócio e funcionalidades.

3. Planejamento de Testes

Elaboração do Plano de Teste com base nos requisitos.

4. Elaboração dos Casos de Teste

Definição dos cenários, procedimentos e resultados esperados.

5. Execução dos Testes

Verificação prática do funcionamento do sistema.

6. Relatório e Aprovação

Registro dos resultados e avaliação da qualidade.

## 2. Exemplo prático de como a análise de requisitos gera testes

Imagine que uma empresa está desenvolvendo um sistema de cadastro de clientes.

Na Análise de Requisitos, foi identificado o seguinte requisito:

RF001 – Cadastro de Clientes

O sistema deverá permitir que o usuário cadastre clientes informando:

- Nome completo (obrigatório).
- CPF (obrigatório e válido).
- E-mail (obrigatório e válido).
- Telefone (obrigatório).

A equipe de QA utiliza essas informações para elaborar o Plano de Teste.

Veja a relação:

| Requisito analisado | Teste que será planejado |
| --- | --- |
| Nome obrigatório | Tentar cadastrar sem nome |
| CPF válido | Informar CPF inválido |
| E-mail válido | Informar e-mail incorreto |
| Telefone obrigatório | Tentar cadastrar sem telefone |
| Cadastro de cliente | Realizar cadastro completo |

Perceba que cada requisito gera uma possibilidade de verificação.

## 3. Quem é responsável por cada etapa?

| Profissional | Responsabilidade |
| --- | --- |
| Analista de Negócios | Levantar e documentar requisitos |
| Analista de Sistemas | Analisar regras e especificações |
| Analista de QA / Testes | Elaborar o Plano de Teste e os casos de teste |
| Desenvolvedor | Implementar e corrigir funcionalidades |
| Product Owner | Validar prioridades e necessidades do produto |

Em algumas empresas, essas responsabilidades podem ser compartilhadas.

## 4. Um detalhe importante: o Plano de Teste pode mudar?

Sim\! O Plano de Teste não é necessariamente um documento definitivo.

Ele pode ser atualizado quando:

- Um requisito é alterado.
- Uma nova funcionalidade é adicionada.
- Uma regra de negócio é modificada.
- Um risco é identificado.
- Um defeito exige novos testes.

## 5. Resumindo

A Análise de Requisitos é uma das principais bases para a criação do Plano de Teste.

Uma forma simples de entender:

- A Análise de Requisitos define o que o sistema deve fazer.
- O Plano de Teste define como verificar se o sistema atende aos requisitos.
- Os Casos de Teste definem quais ações serão executadas e quais resultados são esperados.
- O Relatório de Teste registra o que aconteceu durante a execução.

> Uma boa prática profissional: cada requisito deve ter sua rastreabilidade até um ou mais casos de teste. Isso permite comprovar que as funcionalidades solicitadas foram efetivamente verificadas.

Para fazer isso, você utiliza uma técnica chamada `Matriz de Rastreabilidade de Requisitos (MRR).`

Ela permite relacionar cada requisito identificado na Análise de Requisitos com os respectivos casos de teste criados pela equipe de QA.

Na prática, você cria uma tabela que demonstra que nenhum requisito ficou sem teste.

## 1. Primeiro: identifique os requisitos

Imagine que você recebeu a documentação de requisitos de um sistema de cadastro de clientes.

Na análise, foram identificados estes requisitos:

| Código | Requisito | Descrição |
| --- | --- | --- |
| RF001 | Login | O sistema deve permitir acesso ao usuário. |
| RF002 | Cadastro | O sistema deve permitir cadastrar clientes. |
| RF003 | Consulta | O sistema deve permitir consultar clientes. |
| RF004 | Alteração | O sistema deve permitir alterar dados. |
| RF005 | Exclusão | O sistema deve permitir excluir clientes. |

Esses códigos devem ser únicos para facilitar o controle.

## 2. Segundo: crie os casos de teste

Agora, o analista de QA transforma os requisitos em testes.

Exemplo:

| Código do teste | Descrição |
| --- | --- |
| CT001 | Realizar login com dados válidos |
| CT002 | Realizar login com senha incorreta |
| CT003 | Cadastrar cliente com dados válidos |
| CT004 | Cadastrar cliente sem nome |
| CT005 | Consultar cliente cadastrado |
| CT006 | Alterar telefone do cliente |
| CT007 | Excluir cliente cadastrado |

Observe que um requisito pode gerar vários casos de teste.

## 3. Terceiro: construa a Matriz de Rastreabilidade

Agora vem a parte mais importante: relacionar os requisitos aos casos de teste.

## Matriz de Rastreabilidade de Requisitos

PROJETO: SISTEMA DE CADASTRO DE CLIENTES

| Requisito | Caso de teste | Objetivo |
| --- | --- | --- |
| RF001 | CT001 | Validar login correto |
| RF001 | CT002 | Validar login incorreto |
| RF002 | CT003 | Validar cadastro correto |
| RF002 | CT004 | Validar campo obrigatório |
| RF003 | CT005 | Validar consulta |
| RF004 | CT006 | Validar alteração |
| RF005 | CT007 | Validar exclusão |

Total de requisitos

# 5

Total de casos de teste

# 7

Todos os requisitos possuem testes associados

Essa matriz mostra que:

- RF001 está relacionado a CT001 e CT002.
- RF002 está relacionado a CT003 e CT004.
- RF003 está relacionado a CT005.
- RF004 está relacionado a CT006.
- RF005 está relacionado a CT007.

Assim, você consegue comprovar que todos os requisitos possuem testes planejados.

## 4. Quarto: acompanhe a execução dos testes

A rastreabilidade não termina quando os casos de teste são criados. Você também precisa acompanhar a execução.

Exemplo:

| Requisito | Caso de teste | Resultado | Status |
| --- | --- | --- | --- |
| RF001 | CT001 | Login realizado | Aprovado |
| RF001 | CT002 | Sistema aceitou senha incorreta | Reprovado |
| RF002 | CT003 | Cadastro realizado | Aprovado |
| RF002 | CT004 | Campo obrigatório validado | Aprovado |
| RF003 | CT005 | Consulta realizada | Aprovado |
| RF004 | CT006 | Dados alterados | Aprovado |
| RF005 | CT007 | Cliente excluído | Aprovado |

Agora você consegue identificar quais requisitos foram testados, quais passaram e quais apresentaram problemas.

## 5. Quinto: utilize uma planilha para controlar tudo

Uma maneira simples de implementar isso em uma empresa é utilizar Excel.

Sugiro criar quatro abas:

Aba 1

Requisitos

Código, descrição, prioridade e status do requisito.

Aba 2

Casos de Teste

Código, objetivo, pré-condições, passos e resultado esperado.

Aba 3

Matriz de Rastreabilidade

Relacionamento entre requisitos e casos de teste.

Aba 4

Execução dos Testes

Resultado obtido, status, defeitos e evidências.

## 6. Como funciona o fluxo profissional?

Documento de Análise de Requisitos

RF001, RF002, RF003...

Plano de Teste

Estratégia, escopo e abordagem dos testes

Casos de Teste

CT001, CT002, CT003...

Matriz de Rastreabilidade

Relaciona RFs com CTs

Execução dos Testes

Aprovado, reprovado ou bloqueado

Relatório de Testes

Resultados, defeitos e cobertura

## 7. Vamos praticar?

Posso montar um exemplo mais próximo da realidade de uma empresa, mostrando desde a documentação de requisitos até a matriz de rastreabilidade preenchida.

Minha sugestão é utilizar um projeto fictício de sistema de vendas, com requisitos funcionais e não funcionais, casos de teste positivos e negativos e uma matriz de rastreabilidade completa.

Assim você consegue visualizar como um Analista de QA executa esse trabalho no dia a dia.