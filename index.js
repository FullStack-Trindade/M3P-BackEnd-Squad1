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

const createExame = require ('./src/controllers/exames/createExames');
const readExame = require ('./src/controllers/exames/readExames');
const updateExame = require ('./src/controllers/exames/updateExames');
const deleteExame = require ('./src/controllers/exames/deleteExames');

const validaUsuario = require('./src/middlewares/validaUsuario')
const validatePatientRequest = require("./src/middlewares/validate-patient-request");
const validateExameRequest = require("./src/middlewares/validate-exemes.request")

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
app.post("/api/exames/", validateExameRequest, createExame);
app.put("/api/pacientes/:id", updatePatient);
app.get("/api/pacientes", patientList);
app.get("/api/pacientes/:id", searchPatients);
app.delete("/api/pacientes/:id", deletePatient);

app.post('/api/usuario', validaUsuario, postUser)

app.listen(process.env.SERVER_PORT, () => {
  console.log("local server online");
});