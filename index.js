require('dotenv').config()
const express = require('express')
const cors = require('cors');
const appointmentRoutes = require('./src/routes/appointment')

const connection = require('./src/database/index');

//Autenticação
const Login = require("./src/controllers/session/login");
const validateToken = require("./src/middlewares/validateToken");

//Pacientes
const createPatient = require("./src/controllers/Patients/createPatients");
const updatePatient = require("./src/controllers/Patients/updatePatients");
const patientList = require("./src/controllers/Patients/patientList");
const searchPatients = require("./src/controllers/Patients/searchPatients");
const deletePatient = require("./src/controllers/Patients/deletePatients");

//Usuário
const postUser = require("./src/controllers/user/postUser");
const putUser = require("./src/controllers/user/putUser");
const getUser = require('./src/controllers/user/getUser');

//Midleware
const validaUsuario = require("./src/middlewares/validaUsuario");
const validatePatientRequest = require("./src/middlewares/validate-patient-request");
const validatePutUser = require("./src/middlewares/validatePutUser");


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.post("/api/pacientes", validatePatientRequest, createPatient);
app.put("/api/pacientes/:id", validatePatientRequest, updatePatient);
app.get("/api/pacientes", patientList);
app.get("/api/pacientes/:id", searchPatients);
app.delete("/api/pacientes/:id", deletePatient);

//Usuário
app.post("/api/usuario", validaUsuario, postUser);
app.put("/api/usuarios/:id",validatePutUser,putUser );
app.get("/api/usuarios",getUser);

const startServer = () => {

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}`);
  });
  };


const connect = async() => {
  try {
    await connection.authenticate()
    console.log('Conexão com banco de dados bem sucedida');
    startServer();
  } catch (error) {
    console.log('Sem conexao com banco de dados', error);
  }
}

connect()
connection.sync({ alter: true });

