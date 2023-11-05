const { Router } = require('express');


// MIDDLEWARES
const validateExercise = require("../middlewares/exercise/validate-exercise");

// CONTROLLERS
const createExam = require("../../src/controllers/exercise/createExercise");
const readExam = require("../../src/controllers/exercise/readExercise");
const updateExam = require("../../src/controllers/exercise/updateExercise");
const deleteExam = require("../../src/controllers/exercise/deleteExercise");

// ROUTES

const exerciseRoutes = new Router();

exerciseRoutes
    .post("/api/exercicios", validateExercise, createExam)
    .put("/api/exercicios/:id",updateExam)
    .get("/api/exercicios", readExam)
    .delete("/api/exercicios/:id", deleteExam)
module.exports = exerciseRoutes;