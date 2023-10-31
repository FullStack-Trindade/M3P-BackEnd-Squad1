const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LABMedicine LTDA",
      version: "1.0.0",
      description: "API desenvolvida para o curso Dev Fullstack da Lab 365 em parceria com o SENAI e prefeitura de Florianópolis, através do projeto Floripa Mais Tec. Essa API consiste nos endpoints de um sistema hospitalar, incluindo Usuários, Autenticação, Pacientes, Exames, Consultas e Prontuários",
    },
  },
  apis: ["./routes/*.js"], // Substitua pelo caminho correto para seus arquivos de rota
};

const specs = swaggerJsdoc(options);

module.exports = specs;
