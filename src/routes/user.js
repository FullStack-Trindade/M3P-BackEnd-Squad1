const { Router } = require("express");

// MIDDLEWARES

const validateCreateUser = require("../middlewares/user/validate-create-user");
const validateUpdateUser = require('../middlewares/user/validate-update-user')

// // CONTROLLERS

const createUser = require("../controllers/user/createUser");
const updateUser = require ('../controllers/user/updateUser')

// // ROUTES
const userRoutes = new Router();

userRoutes
  .post("/api/usuarios", validateCreateUser, createUser)
  .put('/api/usuarios/:id',validateUpdateUser, updateUser)
 ;

module.exports = userRoutes;
