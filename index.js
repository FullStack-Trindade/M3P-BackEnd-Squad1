require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connection = require("./src/database/index");

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Sistema Hospitalar MEDI TECH PRO',
    version: '1.5.0',
    description:
      'Esta é uma API REST construída com o Express para um sistema hospitalar que gerencia o cadastro de pacientes, médicos, enfermeiros e o registro de consultas, exames, dietas, exercícios e medicamentos.',
    license: {
      name: 'MIT License',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'LAB 365',
      url: 'https://lab365.tech/',
    },
  },
  servers: [
      {
      url: 'http://localhost:3000',
      description: 'Servidor de Desenvolvimento (local)',
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

//Autenticação
const authRoutes = require('./src/routes/auth');
const passwordRoutes = require("./src/routes/password");
const loginRoute = require('./src/routes/login');

//Pacientes
const patientRoutes = require("./src/routes/patient");

// Medicamentos
const medicationRoutes = require("./src/routes/medication");

//Usuários
const userRoutes = require("./src/routes/user");

//Exames
const examRoutes = require("./src/routes/exam");

//Exercicio
const exerciseRoutes = require("./src/routes/exercise");

//Consultas
const appointmentRoutes = require("./src/routes/appointment");

//Prontuários
const patientRecordRoutes = require("./src/routes/patientRecord");

//Dietas
const dietRoutes = require("./src/routes/diet");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Login
app.use(loginRoute);

//Auth
app.use(authRoutes);

//Senha
app.use(passwordRoutes);

//Pacientes
app.use(patientRoutes);

//Medicamentos
app.use(medicationRoutes);

//Usuários
app.use(userRoutes);

//Exame
app.use(examRoutes);

//Exercicios
app.use(exerciseRoutes);

//Consultas
app.use(appointmentRoutes);

//Prontuários
app.use(patientRecordRoutes);

//Dietas
app.use(dietRoutes);

const startServer = () => {
  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}`);
  });
};

const connect = async () => {
  try {
    await connection.authenticate();
    console.log("Conexão com banco de dados bem sucedida");
    startServer();
  } catch (error) {
    console.log("Sem conexao com banco de dados", error);
  }
};

connect();
connection.sync({ alter: true });