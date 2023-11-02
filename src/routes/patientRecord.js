const { Router } = require('express');

// MIDDLEWARES

// CONTROLLERS
const listPatientRecords = require('../controllers/patientRecord/listPatientRecords');

// ROUTES
const patientRecordRoutes = new Router();

patientRecordRoutes
    .get('/api/prontuarios', listPatientRecords);

module.exports = patientRecordRoutes;