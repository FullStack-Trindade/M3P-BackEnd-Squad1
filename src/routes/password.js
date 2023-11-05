const { Router } = require('express');

// CONTROLLERS
const resetPasswordRequest = require('../controllers/password/resetPasswordRequest');
const sendNewPassword = require('../controllers/password/resetPassword');

// ROUTES
const passwordRoutes = new Router();
/**
 * @swagger
 * /api/usuarios/resetarsenha:
 *   patch:
 *     tags:
 *       - Reset de Senha
 *     summary: Endpoint para redefinir a senha do usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ID:
 *                 type: integer
 *                 description: ID do usuário a ser atualizado.
 *                 example: 123
 *               E-mail:
 *                 type: string
 *                 description: E-mail do usuário.
 *                 example: exemplo@email.com
 *               Senha:
 *                 type: string
 *                 description: Nova senha do usuário.
 *                 example: novaSenha123
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

passwordRoutes
    .post('/api/requisitarSenha', resetPasswordRequest)
    .patch('/api/resetarSenha', sendNewPassword)

module.exports = passwordRoutes;