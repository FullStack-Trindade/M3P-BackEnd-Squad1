require('dotenv').config()
const express = require('express')
const cors = require('cors');

const connection = require('./src/database/index');

const createPatient = require("./src/controllers/Patients/createPatients");
const updatePatient = require("./src/controllers/Patients/updatePatients");
const patientList = require("./src/controllers/Patients/patientList");
const searchPatients = require("./src/controllers/Patients/searchPatients");
const deletePatient = require("./src/controllers/Patients/deletePatients");
const postUser = require('./src/controllers/user/postUser')

const validaUsuario = require('./src/middlewares/validaUsuario')
const validatePatientRequest = require("./src/middlewares/validate-patient-request");

const appointmentRoutes = require('./src/routes/appointment')

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

app.post('/api/usuario', validaUsuario, postUser)

const Login = require('./src/controllers/session/login')
const validateToken = require('./src/middlewares/validateToken')
app.post('/api/usuario/login', validateToken, Login)

const postUser = require('./src/controllers/user/postUser')
const validaUsuario = require('./src/middlewares/validaUsuario')
app.post('/api/usuario', validaUsuario, postUser)

app.use(appointmentRoutes);

app.listen(process.env.SERVER_PORT, () => console.log(`Aplicação está online na porta ${process.env.SERVER_PORT}`));

const connect = async() => {
  try {
    await connection.authenticate()
    console.log('Conexão com banco de dados bem sucedida');
  } catch (error) {
    console.log('Sem conexao com banco de dados', error);
  }
}

connect()
connection.sync({ alter: true });