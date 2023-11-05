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
/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     tags:
 *       - Usuários
 *     summary: Cadastrar um novo Usuário
 *     description: Rota para cadastrar um novo usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeCompleto:
 *                 type: string
 *                 description: Nome completo do usuário (mínimo 8 e máximo 64 caracteres).
 *               genero:
 *                 type: string
 *                 description: Gênero do usuário.
 *               cpf:
 *                 type: string
 *                 description: CPF no formato 000.000.000-00.
 *               telefone:
 *                 type: string
 *                 description: Telefone no formato (99) 9 9999-99999.
 *               email:
 *                 type: string
 *                 description: E-mail válido.
 *               senha:
 *                 type: string
 *                 description: Senha com no mínimo 6 caracteres.
 *               tipo:
 *                 type: string
 *                 description: Tipo de usuário (Médico, Administrador ou Enfermeiro).
 *               statusSistema:
 *                 type: boolean
 *                 description: Status do sistema (leitura apenas).
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso.
 *       400:
 *         description: Requisição inválida com mensagem de erro explicativa no corpo.
 *       409:
 *         description: CPF e/ou E-mail já cadastrados com mensagem de erro explicativa no corpo.
 *       500:
 *         description: Erro ao gerar resposta.
 *
 *   put:
 *     tags:
 *       - Usuários
 *     summary: Atualizar um Usuário por ID
 *     description: Rota para atualizar um usuário existente por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser atualizado.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeCompleto:
 *                 type: string
 *                 description: Nome completo do usuário (mínimo 8 e máximo 64 caracteres).
 *               genero:
 *                 type: string
 *                 description: Gênero do usuário.
 *               telefone:
 *                 type: string
 *                 description: Telefone no formato (99) 9 9999-99999.
 *               senha:
 *                 type: string
 *                 description: Senha com no mínimo 6 caracteres.
 *               tipo:
 *                 type: string
 *                 description: Tipo de usuário (Médico, Administrador ou Enfermeiro).
 *               statusSistema:
 *                 type: boolean
 *                 description: Status do sistema (leitura apenas).
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *       400:
 *         description: Requisição inválida com mensagem de erro explicativa no corpo.
 *       500:
 *         description: Erro ao gerar resposta.
 *
 * @swagger
 * /api/usuarios:
 *   get:
 *     tags:
 *       - Usuários
 *     summary: Retorna todos os Usuários
 *     description: Rota para obter todos os usuários.
 *     responses:
 *       200:
 *         description: Lista de usuários obtida com sucesso.
 *       500:
 *         description: Erro ao gerar resposta.
 *
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     tags:
 *       - Usuários
 *     summary: Deletar Usuário por ID
 *     description: Rota para deletar um usuário por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser deletado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso.
 *       400:
 *         description: Requisição inválida com mensagem de erro explicativa no corpo.
 *       500:
 *         description: Erro ao gerar resposta.
 */


userRoutes
  .get("/api/usuarios", userList)
  .post("/api/usuarios", validateCreateUser, createUser)
  .put("/api/usuarios/:id", validateUpdateUser, updateUser)
  .delete("/api/usuarios/:id", deleteUser)
  .post("/api/usuarios/search", searchUserByCpfEmail);

module.exports = userRoutes;
