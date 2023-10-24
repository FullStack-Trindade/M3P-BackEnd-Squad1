require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./src/database");

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

//Midleware
const validaUsuario = require("./src/middlewares/validaUsuario");
const validatePatientRequest = require("./src/middlewares/validate-patient-request");
const validatePutUser = require("./src/middlewares/validatePutUser");


// Conexão Servidor
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//Autenticação

app.post("/api/usuario/login", validateToken, Login);

//Paciente

app.post("/api/pacientes", validatePatientRequest, createPatient);
app.put("/api/pacientes/:id", updatePatient);
app.get("/api/pacientes", patientList);
app.get("/api/pacientes/:id", searchPatients);
app.delete("/api/pacientes/:id", deletePatient);

//Usuário
app.post("/api/usuario", validaUsuario, postUser);
app.put("/api/usuarios/:id",validatePutUser,putUser );

app.listen(process.env.SERVER_PORT, () => {
  console.log("local server online");
});
