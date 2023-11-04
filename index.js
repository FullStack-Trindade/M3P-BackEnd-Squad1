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
const Login = require("./src/controllers/session/login");
const authRoutes = require('./src/routes/auth');
//const validateToken = require("./src/middlewares/validateToken");


const loginRoute = require('./src/routes/login');
//const authRoutes = require('./src/routes/auth');
const patientRoutes = require("./src/routes/patient");

// Medicamentos

const medicationRoutes = require("./src/routes/medication");

//Usuário
const userRoutes = require("./src/routes/user");

//Exame
const createExam = require("./src/controllers/exams/createExams");
const readExam = require("./src/controllers/exams/readExams");
const updateExam = require("./src/controllers/exams/updateExams");
const deleteExam = require("./src/controllers/exams/deleteExams");

//Exercicio
const createExercise = require("./src/controllers/exercise/createExercise");
const readExercise = require("./src/controllers/exercise/readExercise");
const updateExercise = require("./src/controllers/exercise/updateExercise");
const deleteExercise = require("./src/controllers/exercise/deleteExercise");

//Consultas
const appointmentRoutes = require("./src/routes/appointment");

//Prontuários
const patientRecordRoutes = require("./src/routes/patientRecord");

//middlewares
const validateExercise = require("./src/middlewares/validate-exercise");

const validateExam = require("./src/middlewares/validate-exams.request");
const validateExamUpdate = require('./src/middlewares/validate-examsUpdate');

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

//Paciente
app.use(patientRoutes);

// MEDICAMENTOS
app.use(medicationRoutes);

//Usuário
app.use(userRoutes);


//Exame
app.post("/api/exames", validateExam, createExam);
app.put("/api/exames/:id", validateExamUpdate, updateExam);
app.get("/api/exames", readExam);
app.delete("/api/exames/:id", deleteExam);

//Exercicio
app.post("/api/exercicios", validateExercise, createExercise);
app.get("/api/exercicios", readExercise);
app.put("/api/exercicios/:id", validateExercise, updateExercise);
app.delete("/api/exercicios/:id", deleteExercise);

//Consultas
app.use(appointmentRoutes);

//Prontuários
app.use(patientRecordRoutes);

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