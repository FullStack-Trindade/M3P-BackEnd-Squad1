const { Router } = require('express');

// MIDDLEWARES

// CONTROLLERS
const createAuth = require('../controllers/auth/createAuth');
const getAuth = require('../controllers/auth/getAuth');
const deleteAuth = require('../controllers/auth/deleteAuth');

// ROUTES
const authRoutes = new Router();

authRoutes
    .post('/api/auth', createAuth)
    .get('/api/auth', getAuth)
    .delete('/api/auth/:id', deleteAuth);

module.exports = authRoutes;