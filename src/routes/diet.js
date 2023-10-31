const { Router } = require('express');

// MIDDLEWARES
const register = require('../middlewares/diet/validate-create-diet');
const update = require('../middlewares/diet/validate-update-diet');

// CONTROLLERS
const createDiet = require('../controllers/diet/createDiet');
const updateDiet = require('../controllers/diet/updateDiet');
const listDiets = require('../controllers/diet/listDiets');
const deleteDietById = require('../controllers/diet/deleteDietById');

// ROUTES
const dietRoutes = new Router();

dietRoutes
    .post('/api/dietas', register.validateCreateDiet, createDiet)
    .put('/api/dietas/:id', update.validateCreateDiet, updateDiet)
    .get('/api/dietas', listDiets)
    .delete('/api/dietas/:id', deleteDietById);

module.exports = dietRoutes;