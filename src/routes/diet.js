const { Router } = require('express');

// MIDDLEWARES
const register = require('../middlewares/diet/validate-create-diet');
const update = require('../middlewares/diet/validate-update-diet');

// CONTROLLERS
const createDiet = require('../controllers/diet/createDiet');
const updateDiet = require('../controllers/diet/updateDiet');

// ROUTES
const dietRoutes = new Router();

dietRoutes
    .post('/api/dietas', register.validateCreateDiet, createDiet)
    .put('/api/dietas/:id', update.validateCreateDiet, updateDiet)

module.exports = dietRoutes;