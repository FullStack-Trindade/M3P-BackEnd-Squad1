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

/**
 * @swagger
 * /api/exames:
 *   post:
 *     tags:
 *       - Exames
 *     summary: Cadastro de um novo Exame
 *     description: Cria um novo exame.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeExame:
 *                 type: string
 *                 minLength: 8
 *                 maxLength: 64
 *               dataExame:
 *                 type: string
 *               horarioExame:
 *                 type: string
 *               tipoExame:
 *                 type: string
 *                 minLength: 4
 *                 maxLength: 32
 *               laboratorio:
 *                 type: string
 *                 minLength: 4
 *                 maxLength: 32
 *               urlDocumento:
 *                 type: string
 *               resultados:
 *                 type: string
 *                 minLength: 16
 *                 maxLength: 1024
 *               statusSistema:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: Exame cadastrado com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '500':
 *         description: Erro ao gerar a resposta.
 *
 *   put:
 *     tags:
 *       - Exames
 *     summary: Atualiza um Exame pelo Identificador
 *     description: Atualiza os detalhes de um exame existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeExame:
 *                 type: string
 *                 minLength: 8
 *                 maxLength: 64
 *               dataExame:
 *                 type: string
 *               horarioExame:
 *                 type: string
 *               tipoExame:
 *                 type: string
 *                 minLength: 4
 *                 maxLength: 32
 *               laboratorio:
 *                 type: string
 *                 minLength: 4
 *                 maxLength: 32
 *               urlDocumento:
 *                 type: string
 *               resultados:
 *                 type: string
 *                 minLength: 16
 *                 maxLength: 1024
 *               statusSistema:
 *                 type: boolean
 *     responses:
 *       '200':
 *         description: Exame atualizado com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '500':
 *         description: Erro ao gerar a resposta.
 *
 *   get:
 *     tags:
 *       - Exames
 *     summary: Retorna exames pelo Usuário
 *     description: Retorna exames com base no nome do usuário.
 *     parameters:
 *       - in: query
 *         name: nomeUsuario
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Exames retornados com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '500':
 *         description: Erro ao gerar a resposta.
 *
 *   delete:
 *     tags:
 *       - Exames
 *     summary: Deleta Exame pelo Identificador
 *     description: Deleta um exame com base no identificador.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '202':
 *         description: Exame deletado com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '500':
 *         description: Erro ao gerar a resposta.
 */


examRoutes
    .post("/api/exames", validateExam, createExam)
    .put("/api/exames/:id", validateExamUpdate, updateExam)
    .get("/api/exames", readExam)
    .delete("/api/exames/:id", deleteExam)

module.exports = examRoutes;