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

/**
 * @swagger
 * /api/exercícios:
 *   post:
 *     tags:
 *       - Exercícios
 *     summary: Cadastro de um novo Exercício
 *     description: Cria um novo exercício.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeSerieExercicios:
 *                 type: string
 *                 minLength: 5
 *                 maxLength: 100
 *               data:
 *                 type: string
 *               horario:
 *                 type: string
 *               tipo:
 *                 type: string
 *                 enum: ["Resistência Aeróbica", "Resistência Muscular", "Flexibilidade", "Força", "Agilidade", "Outro"]
 *               quantidadePorSemana:
 *                 type: number
 *                 minimum: 0.01
 *               descricao:
 *                 type: string
 *                 minLength: 10
 *                 maxLength: 1000
 *     responses:
 *       '201':
 *         description: Exercício cadastrado com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '500':
 *         description: Erro ao gerar a resposta.
 *
 *   put:
 *     tags:
 *       - Exercícios
 *     summary: Atualiza Exercício pelo Identificador
 *     description: Atualiza os detalhes de um exercício existente.
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
 *               nomeSerieExercicios:
 *                 type: string
 *                 minLength: 5
 *                 maxLength: 100
 *               data:
 *                 type: string
 *               horario:
 *                 type: string
 *               tipo:
 *                 type: string
 *                 enum: ["Resistência Aeróbica", "Resistência Muscular", "Flexibilidade", "Força", "Agilidade", "Outro"]
 *               quantidadePorSemana:
 *                 type: number
 *                 minimum: 0.01
 *               descricao:
 *                 type: string
 *                 minLength: 10
 *                 maxLength: 1000
 *     responses:
 *       '200':
 *         description: Exercício atualizado com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '500':
 *         description: Erro ao gerar a resposta.
 *
 *   get:
 *     tags:
 *       - Exercícios
 *     summary: Busca de Exercícios por Paciente
 *     description: Retorna exercícios com base no nome do paciente.
 *     parameters:
 *       - in: query
 *         name: nomePaciente
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Exercícios retornados com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '500':
 *         description: Erro ao gerar a resposta.
 *
 *   delete:
 *     tags:
 *       - Exercícios
 *     summary: Deleta Exercício por Identificador
 *     description: Deleta um exercício com base no identificador.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '202':
 *         description: Exercício deletado com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '500':
 *         description: Erro ao gerar a resposta.
 */


exerciseRoutes
    .post("/api/exercicios", validateExercise, createExam)
    .put("/api/exercicios/:id",updateExam)
    .get("/api/exercicios", readExam)
    .delete("/api/exercicios/:id", deleteExam)
module.exports = exerciseRoutes;