const { Router } = require('express');

// CONTROLLERS
const resetPasswordRequest = require('../controllers/password/resetPasswordRequest');
const sendNewPassword = require('../controllers/password/resetPassword');

// ROUTES
const passwordRoutes = new Router();

passwordRoutes
    .post('/api/requisitarSenha', resetPasswordRequest)
    .patch('/api/resetarSenha', sendNewPassword)

module.exports = passwordRoutes;