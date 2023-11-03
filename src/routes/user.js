const { Router } = require("express");

// MIDDLEWARES

const validateCreateUser = require("../middlewares/user/validate-create-user");


// // CONTROLLERS

const createUser = require("../controllers/user/createUser");


// // ROUTES
const userRoutes = new Router();

userRoutes
  .post("/api/usuarios", validateCreateUser, createUser)
 ;

module.exports = userRoutes;
