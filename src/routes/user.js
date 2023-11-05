const { Router } = require("express");

// MIDDLEWARES

const validateCreateUser = require("../middlewares/user/validate-create-user");
const validateUpdateUser = require("../middlewares/user/validate-update-user");

// // CONTROLLERS

const createUser = require("../controllers/user/createUser");
const updateUser = require("../controllers/user/updateUser");
const deleteUser = require("../controllers/user/deleteUser");
const userList = require("../controllers/user/userList");
const searchUserByCpfEmail = require("../controllers/user/searchUserByCpfEmail");

// // ROUTES
const userRoutes = new Router();

userRoutes
  .get("/api/usuarios", userList)
  .post("/api/usuarios", validateCreateUser, createUser)
  .put("/api/usuarios/:id", validateUpdateUser, updateUser)
  .delete("/api/usuarios/:id", deleteUser)
  .post("/api/usuarios/search", searchUserByCpfEmail);

module.exports = userRoutes;
