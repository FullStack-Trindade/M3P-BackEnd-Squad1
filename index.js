require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connection = require("./src/database/index");

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  }

};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

//Autenticação
const authRoutes = require('./src/routes/auth');
const loginRoute = require('./src/routes/login');

//Pacientes
const patientRoutes = require("./src/routes/patient");

// Medicamentos
const medicationRoutes = require("./src/routes/medication");

//Usuários
const userRoutes = require("./src/routes/user");

//Exame
const createExam = require("./src/controllers/exams/createExams");
const readExam = require("./src/controllers/exams/readExams");
const updateExam = require("./src/controllers/exams/updateExams");
const deleteExam = require("./src/controllers/exams/deleteExams");

//Consultas
const appointmentRoutes = require("./src/routes/appointment");

//Prontuários
const patientRecordRoutes = require("./src/routes/patientRecord");

//Dietas
const dietRoutes = require("./src/routes/diet");

//Midleware
const validateExam = require("./src/middlewares/validate-exams.request");
const validateExamUpdate = require("./src/middlewares/validate-examsUpdate");

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

//Pacientes
app.use(patientRoutes);

//Medicamentos
app.use(medicationRoutes);

//Usuários
app.use(userRoutes);

//Exames
app.post("/api/exames", validateExam, createExam);
app.put("/api/exames/:id", validateExamUpdate, updateExam);
app.get("/api/exames", readExam);
app.delete("/api/exames/:id", deleteExam);

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