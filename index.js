require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./src/database");

const createPatient = require("./src/controllers/createPatients");
const updatePatient = require("./src/controllers/updatePatients");
const patientList = require("./src/controllers/patientList");
const searchPatients = require ("./src/controllers/searchPatients")
const deletePatient = require("./src/controllers/deletePatients");


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
app.put('/api/pacientes/:id', updatePatient);
app.get('/api/pacientes', patientList);
app.get('/api/pacientes/:id', searchPatients);
app.delete('/api/pacientes/:id', deletePatient);


app.listen(process.env.SERVER_PORT, () => {
  console.log("local server online");
});

connection.authenticate();
connection.sync({ alter: true });
