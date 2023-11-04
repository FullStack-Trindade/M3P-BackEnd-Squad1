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
/**
 * @swagger
 * /api/exemplo:
 *   get:
 *     summary: Retorna uma lista de exemplos.
 *     responses:
 *       200:
 *         description: Sucesso - Retorna uma lista de exemplos.
 *       500:
 *         description: Erro do servidor - Não foi possível obter a lista de exemplos.
 */
patientRoutes
  .post("/api/pacientes", validatePatientRequest, createPatient)
  .put("/api/pacientes/:id", validatePatientUpdate, updatePatient)
  .get("/api/pacientes", patientList)
  .get("/api/pacientes/:id", searchPatients)
  .delete("/api/pacientes/:id", deletePatient)
  .get("/api/pacientes/usuario/:id", searchPatientByIdUser);

module.exports = patientRoutes;
