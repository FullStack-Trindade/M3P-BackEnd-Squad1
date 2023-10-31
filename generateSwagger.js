const swaggerAutogen = require("swagger-autogen");

const args = {}; // Argumentos opcionais
const endpointsFiles = ["./routes/*.js"]; // Arquivos de rota
const data = {}; // Dados opcionais

const generateSwagger = swaggerAutogen(args, endpointsFiles, data);

module.exports = generateSwagger;

