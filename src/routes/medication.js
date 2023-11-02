const { Router } = require('express');

// MIDDLEWARES
const validateCreateMedication = require('../middlewares/medication/validate-create-medication');

// CONTROLLERS
const createMedication = require('../controllers/medications/createMedication');
const deleteMedicationById = require('../controllers/medications/deleteMedication');

// ROUTES
const medicationRoutes = new Router();

medicationRoutes
    .post('/api/medicamentos', validateCreateMedication.validateCreateMedication, createMedication)
    .delete('/api/medicamentos/:id',deleteMedicationById);
    
module.exports = medicationRoutes;