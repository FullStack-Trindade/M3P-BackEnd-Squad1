const { Router } = require('express');

// MIDDLEWARES
const register = require('../middlewares/appointment/validate-create-appointment');

// CONTROLLERS
const createAppointment = require('../controllers/appointment/createAppointment');
const listAppointments = require('../controllers/appointment/listAppointments');

// ROUTES
const appointmentRoutes = new Router();

appointmentRoutes
    .post('/api/consultas', register.validateCreateAppointment, createAppointment)
    .get('/api/consultas', listAppointments);

module.exports = appointmentRoutes;