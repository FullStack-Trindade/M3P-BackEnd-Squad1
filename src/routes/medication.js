const { Router } = require('express');

// MIDDLEWARES
const validateCreateMedication = require('../middlewares/medication/validate-create-medication');

// CONTROLLERS
const createMedication = require('../controllers/medications/createMedication');

// ROUTES
const medicationRoutes = new Router();

medicationRoutes
    .post('/api/medicamentos', validateCreateMedication.validateCreateMedication, createMedication);
    
module.exports = medicationRoutes;