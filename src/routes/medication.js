const { Router } = require('express');

// MIDDLEWARES
const validateCreateMedication = require('../middlewares/medication/validate-create-medication');
const validateUpdateMedication = require('../middlewares/medication/validate-update-medication');

// CONTROLLERS
const createMedication = require('../controllers/medications/createMedication');
const updateMedication = require('../controllers/medications/updateMedication');

// ROUTES
const medicationRoutes = new Router();

medicationRoutes
    .post('/api/medicamentos', validateCreateMedication.validateCreateMedication, createMedication)
    .put('/api/medicamentos/:id', validateUpdateMedication.validateUpdateMedication, updateMedication);
    
module.exports = medicationRoutes;