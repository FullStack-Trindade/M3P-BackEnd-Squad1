const { Router } = require('express');

// MIDDLEWARES
const register = require('../middlewares/diet/validate-create-diet');

// CONTROLLERS
const createDiet = require('../controllers/diet/createDiet');

// ROUTES
const dietRoutes = new Router();

dietRoutes
    .post('/api/dietas', register.validateCreateDiet, createDiet)

module.exports = dietRoutes;