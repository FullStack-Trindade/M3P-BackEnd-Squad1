require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./src/database");

const createPatient = require("./src/controllers/Patients/createPatients");
const updatePatient = require("./src/controllers/Patients/updatePatients");
const patientList = require("./src/controllers/Patients/patientList");
const searchPatients = require("./src/controllers/Patients/searchPatients");
const deletePatient = require("./src/controllers/Patients/deletePatients");
const postUser = require('./src/controllers/user/postUser')
const delUser = require('./src/controllers/user/delUser')
const getUser = require('./src/controllers/user/getUser')
const putUser = require('./src/controllers/user/putUser')

const validaUsuario = require('./src/middlewares/validaUsuario')
const validatePatientRequest = require("./src/middlewares/validate-patient-request");

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
app.put("/api/pacientes/:id", updatePatient);
app.get("/api/pacientes", patientList);
app.get("/api/pacientes/:id", searchPatients);
app.delete("/api/pacientes/:id", deletePatient);


const Login = require('./src/controllers/session/login')
const validateToken = require('./src/middlewares/validateToken')
app.post('/api/usuario/login', Login)



app.post('/api/usuarios', validaUsuario, postUser)
app.put('/api/usuarios/:id', validaUsuario, putUser)
app.get('/api/usuarios', validaUsuario, getUser)
app.delete("/api/usuarios/:id", delUser);

app.listen(process.env.SERVER_PORT, () => {
  console.log("local server online");
});

