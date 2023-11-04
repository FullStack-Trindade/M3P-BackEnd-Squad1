/**
 * @swagger
 * /patients:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/

const { Router } = require("express");

// MIDDLEWARES

const validatePatientRequest = require("../middlewares/patient/validate-patient-request");
const validatePatientUpdate = require("../middlewares/patient/validate-patient-update");

// // CONTROLLERS

const createPatient = require("../controllers/patients/createPatients");
const updatePatient = require("../controllers/patients/updatePatients");
const patientList = require("../controllers/patients/patientList");
const searchPatients = require("../controllers/patients/searchPatients");
const deletePatient = require("../controllers/patients/deletePatients");
const searchPatientByIdUser = require("../controllers/patients/searchPatientByIdUser");

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
