require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connection = require("./src/database/index");

//Autenticação
const Login = require("./src/controllers/session/login");
//const validateToken = require("./src/middlewares/validateToken");

const authRoutes = require("./src/routes/auth");
const patientRoutes = require("./src/routes/patient");
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

app.use(authRoutes);

//Paciente
app.use(patientRoutes);

//Usuário
app.use(userRoutes);

//Exame
app.post("/api/exames", validateExam, createExam);
app.put("/api/exames/:id", validateExamUpdate, updateExam);
app.get("/api/exames", readExam);
app.delete("/api/exames/:id", deleteExam);

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
