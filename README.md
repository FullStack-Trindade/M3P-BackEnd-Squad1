<div align="center">
<h1> SYSTEM CARE</h1>

<div align="center">

![code](https://img.shields.io/badge/Code-JavaScript-F7DF1E.svg)
[![made-with-react](https://img.shields.io/badge/Made%20with-React%20v18.2.0-087EA4.svg)](https://react.dev/)
[![made-with-vite](https://img.shields.io/badge/Made%20with-Vite%204.4.5-747BFF.svg)](https://vitejs.dev/)
[![made-with-styled-components](https://img.shields.io/badge/Made%20with-Styled%20Components%205.3.11-BF4F74.svg)](https://ant.design/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub stars](https://img.shields.io/github/stars/FullStack-Trindade/M3P-BackEnd-Squad1.svg?style=social&label=Star&maxAge=2592000)](https://github.com/FullStack-Trindade/M3P-BackEnd-Squad1/watchers)
[![GitHub watchers](https://img.shields.io/github/watchers/FullStack-Trindade/M3P-BackEnd-Squad1.svg?style=social&label=Watch&maxAge=2592000)](https://github.com/FullStack-Trindade/M3P-BackEnd-Squad1/watchers)
[![GitHub forks](https://img.shields.io/github/forks/FullStack-Trindade/M3P-BackEnd-Squad1.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/FullStack-Trindade/M3P-BackEnd-Squad1/forks)

</div>

</div>

Este é um projeto Express para uma aplicação do sistema hospitalar SYSTEM CARE, que gerencia o cadastro de pacientes, médicos, enfermeiros e o registro de consultas, exames, dietas, exercícios e medicamentos.

## 🎯 Contexto

A SYSTEM CARE, líder no setor de tecnologia para gestão hospitalar, recebeu um aporte financeiro para aprimorar seu principal produto, tornando-o disponível em postos de saúde e clínicas particulares em todo o país.

O objetivo desta aplicação é criar uma API Rest para:
- Registrar e gerenciar médicos, enfermeiros e pacientes.
- Registrar atendimentos médicos, incluindo consultas e exames.
- Registrar atendimentos de enfermeiros, incluindo dietas, exercícios e medicamentos.

Este projeto também possui um repositório [Frontend](https://github.com/FullStack-Trindade/M3P-FrontEnd-Squad1), criando um sistema completo.

A aplicação foi desenvolvida como projeto de conclusão do Módulo 3 do Curso de Capacitação Dev FullStack oferecido pelo Lab365 / Senai - SC.

## ⚙️ Funcionalidades

A API oferece informações sobre:

- Autenticação de Usuário.
- Usuários.
- Pacientes.
- Consultas.
- Exames.
- Prontuários.
- Exercícios.
- Dietas.
- Medicamentos.

Para mais detalhes, consulte a seção "Documentação da API" deste documento.

## 🛠️ Tecnologias

Principais tecnologias

- [Ecma Script/ Java Script](https://www.ecma-international.org)
- [NodeJs](https://nodejs.org)
- [Postgrees](https://www.postgresql.org)

Bibliotecas de Node.js:

- [Corsjs](https://www.npmjs.com/package/bcrypt) - Biblioteca para hashing de senhas.
- [Corsjs](https://www.npmjs.com/package/cors)-Middleware para habilitar o suporte a CORS.
- [Expressjs](https://expressjs.com)- Framework web para Node.js.
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)- Implementação de tokens JWT para autenticação.
- [Nodemailer](https://nodemailer.com)- Biblioteca para envio de e-mails.
- [PgAdmin](https://www.pgadmin.org)- Cliente PostgreSQL para Node.js.
- [Sequelize](https://sequelize.org)- ORM para bancos de dados SQL.
- [Swagger - JS Docs](https://swagger.io)- Geração de especificações Swagger a partir de código JSDoc.
- [Swagger - UI Express](https://swagger.io)-  Interface de usuário Swagger para Express.
- [Yup](https://www.npmjs.com/package/yup) - Biblioteca para validação de esquemas. 

**Variáveis de Ambiente:**

Para executar o projeto, renomeie o arquivo `.env.example` para `.env` e configure as variáveis conforme necessário.

## 💻 Rodando localmente

Certifique-se de ter o Node.js (v16) instalado. Siga as etapas abaixo:

Clone o projeto

```bash
  git clone https://github.com/FullStack-Trindade/M3P-BackEnd-Squad1.git
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm i
```

Inicie o servidor

```bash
  npm start
```
Verifique se o servidor está rodando em http://localhost:<SUA_PORTA>.

## 🗂️ Documentação da API

A documentação completa dos endpoints da API está disponível no Swagger. Acesse http://localhost:<SUA_PORTA>/docs para explorar a documentação interativa.

Para o desenvolvimento e teste da API, utilizamos Insomnia.

## 🌲 Estrutura

```
public
│ 
src
├───controllers
│   ├───appointment
│   ├───auth
│   ├───diet
│   ├───exams
│   ├───exercise
│   ├───medications
│   ├───password
│   ├───patientRecord
│   ├───patients
│   ├───session
│   └───user
├───database
├───middlewares
│   ├───appointment
│   ├───diet
│   ├───exam
│   ├───exercise
│   ├───medication
│   ├───patient
│   └───user
├───models
├───routes
└───utils
    └───email
        └───template

```

## 🗃️ Diagrama de Classes

Abaixo segue o diagrama de classes e o relacionamento entre as tabelas criadas neste projeto.

<img src="./public/Diagrama de Classes M3.drawio.png" alt="SYSTEM CARE">

## ✏️ Aprendizados da Equipe

- Criação de API Rest utilizando Express.JS;
- Exploração Banco de Dados Relacional Postgree, utilizando Sequelize;
- Lidar com reras de negócios complexas;
- Integração com Frontend;
- Trabalho em equipe e gitflow;

## 🚀 Melhorias Futuras

1- Registro dos Logs de usuário;

2- Expandir relacionamento de tabelas para facilitar a manutenção, expansão e integridade das informações;

## ✍🏻 Autores

Feito por 🔥Furious Five🔥 (Squad 1), composto por [Beatriz Christie](https://github.com/biachristie),  [Daniel Simoni](https://github.com/DaniSimoni), [Gabriel Pacheco](https://github.com/gabrieldelpacheco), [Reinaldo Porto](https://github.com/portexrp) e [Rodrigo Pieritz](https://github.com/rodrigopieritz) (P.O)🖐🏻

## 🛠️ Feedback e Suporte

Se você tiver algum feedback ou algo não estiver funcionando, por favor nos deixe saber por meio de rodrigo_o_pieritz@estudante.sesisenai.org.br

## 📌 Licença

Este código está sob a Licença MIT, cujo texto pode ser lido em [MIT License](https://github.com/FullStack-Trindade/M3P-BackEnd-Squad1/blob/main/LICENSE.md).