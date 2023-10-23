const { Router } = require('express');

// MIDDLEWARES
const register = require('../middlewares/appointment/validate-create-appointment');
const update = require('../middlewares/appointment/validate-update-appointment');

// CONTROLLERS
const createAppointment = require('../controllers/appointment/createAppointment');
const updateAppointment = require('../controllers/appointment/updateAppointment');
const listAppointments = require('../controllers/appointment/listAppointment');
const deleteAppointmentById = require('../controllers/appointment/deleteAppointmentById');

// ROUTES
const appointmentRoutes = new Router();

appointmentRoutes
    .post('/api/consultas', register.validateCreateAppointment, createAppointment)
    .put('/api/consultas/:id', update.validateUpdateAppointment, updateAppointment)
    .get('/api/consultas', listAppointments)
    .delete('/api/consultas/:id', deleteAppointmentById);

module.exports = appointmentRoutes;