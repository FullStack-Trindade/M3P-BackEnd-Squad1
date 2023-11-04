const { Router } = require('express');

// MIDDLEWARES

// CONTROLLERS
const listPatientRecords = require('../controllers/patientRecord/listPatientRecords');
const searchPatientRecords = require ('../controllers/patientRecord/searchPatientRecord')
// ROUTES
const patientRecordRoutes = new Router();

patientRecordRoutes
    .get('/api/prontuarios', listPatientRecords)
    .get('/api/prontuarios/:id', searchPatientRecords);

module.exports = patientRecordRoutes;