const { Router } = require('express');

// MIDDLEWARES
const register = require('../middlewares/appointment/validate-create-appointment');

// CONTROLLERS
const createAppointment = require('../controllers/appointment/createAppointment');
const listAppointments = require('../controllers/appointment/listAppointment');
const deleteAppointmentById = require('../controllers/appointment/deleteAppointmentById');

// ROUTES
const appointmentRoutes = new Router();

appointmentRoutes
    .post('/api/consultas', register.validateCreateAppointment, createAppointment)
    .get('/api/consultas', listAppointments)
    .delete('/api/consultas/:id', deleteAppointmentById);

module.exports = appointmentRoutes;