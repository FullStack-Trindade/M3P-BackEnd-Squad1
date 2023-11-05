const { Router } = require('express');

// MIDDLEWARES

// CONTROLLERS
const createAuth = require('../controllers/auth/createAuth');
const getAuth = require('../controllers/auth/getAuth');
const deleteAuth = require('../controllers/auth/deleteAuth');

// ROUTES
const authRoutes = new Router();
/**
 * @swagger
 * /api/usuarios/login:
 *   post:
 *     tags:
 *       - Autenticação
 *     summary: Endpoint para a liberação do Login do Usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               E-mail:
 *                 type: string
 *                 description: E-mail do usuário.
 *                 example: exemplo@email.com
 *               Senha:
 *                 type: string
 *                 description: Senha do usuário.
 *                 example: senha123
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de erro explicativa.
 *                   example: Dados inválidos.
 */

authRoutes
    .post('/api/auth', createAuth)
    .get('/api/auth', getAuth)
    .delete('/api/auth/:id', deleteAuth);

module.exports = authRoutes;