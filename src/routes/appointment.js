const { Router } = require('express');

// MIDDLEWARES
const register = require('../middlewares/appointment/validate-create-appointment');

// CONTROLLERS
const createAppointment = require('../controllers/appointment/createAppointment');

// ROUTES
const appointmentRoutes = new Router();

appointmentRoutes
    .post('/api/consultas', register.validateCreateAppointment, createAppointment);

module.exports = appointmentRoutes;