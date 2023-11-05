const { Router } = require('express');


// MIDDLEWARES
const validateExam = require("../middlewares/exam/validateExam");
const validateExamUpdate = require('../middlewares/exam/validateExamUpdate');

// CONTROLLERS
const createExam = require("../../src/controllers/exams/createExams");
const readExam = require("../../src/controllers/exams/readExams");
const updateExam = require("../../src/controllers/exams/updateExams");
const deleteExam = require("../../src/controllers/exams/deleteExams");

// ROUTES

const examRoutes = new Router();

examRoutes
    .post("/api/exames", validateExam, createExam)
    .put("/api/exames/:id", validateExamUpdate, updateExam)
    .get("/api/exames", readExam)
    .delete("/api/exames/:id", deleteExam)
module.exports = examRoutes;