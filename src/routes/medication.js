const { Router } = require('express');

// MIDDLEWARES
const validateCreateMedication = require('../middlewares/medication/validate-create-medication');

// CONTROLLERS
const createMedication = require('../controllers/medications/createMedication');

// ROUTES
const appointmentRoutes = new Router();

appointmentRoutes
    .post('/api/medicamentos', validateCreateMedication, createMedication)
    
module.exports = appointmentRoutes;