const { Router } = require("express");

// MIDDLEWARES

const validatePatientRequest = require("../middlewares/validate-patient-request");
const validatePatientUpdate = require("../middlewares/validate-patient-update");

// // CONTROLLERS

const createPatient = require("../controllers/Patients/createPatients");
const updatePatient = require("../controllers/Patients/updatePatients");
const patientList = require("../controllers/Patients/patientList");
const searchPatients = require("../controllers/Patients/searchPatients");
const deletePatient = require("../controllers/Patients/deletePatients");
const searchPatientByIdUser = require("../controllers/Patients/searchPatientByIdUser");

// // ROUTES
const patientRoutes = new Router();

patientRoutes
  .post("/api/pacientes", validatePatientRequest, createPatient)
  .put("/api/pacientes/:id", validatePatientUpdate, updatePatient)
  .get("/api/pacientes", patientList)
  .get("/api/pacientes/:id", searchPatients)
  .delete("/api/pacientes/:id", deletePatient)
  .get("/api/pacientes/usuario/:id", searchPatientByIdUser);

module.exports = patientRoutes;
