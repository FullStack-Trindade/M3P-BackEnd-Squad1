const { Router } = require('express');

// CONTROLLERS
const login = require("../controllers/session/login");

// ROUTES
const loginRoute = new Router();

loginRoute
    .post('/api/usuarios/login', login);

module.exports = loginRoute;




