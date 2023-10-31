const { Router } = require('express');

// MIDDLEWARES
const register = require('../middlewares/diet/validate-create-diet');

// CONTROLLERS
const createDiet = require('../controllers/diet/createDiet');
const updateDiet = require('../controllers/diet/updateDiet');
const listDiets = require('../controllers/diet/listDiets');

// ROUTES
const dietRoutes = new Router();

dietRoutes
    .post('/api/dietas', register.validateCreateDiet, createDiet)
    .put('/api/dietas/:id', update.validateCreateDiet, updateDiet)
    .get('/api/dietas', listDiets)


module.exports = dietRoutes;