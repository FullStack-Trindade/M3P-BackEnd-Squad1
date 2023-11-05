const { Router } = require('express');

// CONTROLLERS
const login = require("../controllers/session/login");

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
// ROUTES
const loginRoute = new Router();

loginRoute
    .post('/api/usuarios/login', login);

module.exports = loginRoute;




