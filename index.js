require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connection = require("./src/database/index");

//Autenticação
const Login = require("./src/controllers/session/login");
//const validateToken = require("./src/middlewares/validateToken");
const authRoutes = require('./src/routes/auth');

const patientRoutes = require("./src/routes/patient");

//Usuário
const postUser = require('./src/controllers/user/postUser')
const delUser = require('./src/controllers/user/delUser')
const getUser = require('./src/controllers/user/getUser')
const putUser = require('./src/controllers/user/putUser')
const searchUserByCpf = require("./src/controllers/user/searchUserByCpfEmail");

//Exame
const createExam = require("./src/controllers/exams/createExams");
const readExam = require("./src/controllers/exams/readExams");
const updateExam = require("./src/controllers/exams/updateExams");
const deleteExam = require("./src/controllers/exams/deleteExams"); 

//Consultas
const appointmentRoutes = require("./src/routes/appointment");

//Prontuários
const patientRecordRoutes = require('./src/routes/patientRecord');

//Midleware
const validaUsuario = require("./src/middlewares/validaUsuario");
const validatePutUser = require("./src/middlewares/validatePutUser");
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
//Paciente
app.post("/api/pacientes", validatePatientRequest, createPatient);
app.put("/api/pacientes/:id", validatePatientRequest, updatePatient);
app.get("/api/pacientes", patientList);
app.get("/api/pacientes/:id", searchPatients);
app.delete("/api/pacientes/:id", deletePatient);

//Usuário
app.post("/api/usuarioss", validaUsuario, postUser);
app.put("/api/usuarios/:id", validatePutUser, putUser);
app.get("/api/usuarios", getUser);
app.post("/api/usuarios/search", searchUserByCpf);
app.delete("/api/usuarios/:id", delUser);
app.post('/api/usuarios/login', Login);

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

const connect = async() => {
  try {
    await connection.authenticate();
    console.log("Conexão com banco de dados bem sucedida");
    startServer();
  } catch (error) {
    console.log("Sem conexao com banco de dados", error);
  }
};

connect()
connection.sync({ alter: true });