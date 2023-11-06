const { Router } = require('express');

// MIDDLEWARES
const validateCreateMedication = require('../middlewares/medication/validate-create-medication');
const validateUpdateMedication = require('../middlewares/medication/validate-update-medication');

// CONTROLLERS
const createMedication = require('../controllers/medications/createMedication');
const deleteMedicationById = require('../controllers/medications/deleteMedication');
const updateMedication = require('../controllers/medications/updateMedication');
const medicationRead = require('../controllers/medications/readMedication')


// ROUTES
const medicationRoutes = new Router();
/**
 * @swagger
 * /api/medicamentos:
 *   post:
 *     tags:
 *       - Medicamentos
 *     summary: Cadastra um novo Medicamento.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeMedicamento:
 *                 type: string
 *                 minLength: 5
 *                 maxLength: 100
 *                 description: Nome do medicamento.
 *               data:
 *                 type: string
 *                 format: date
 *                 description: Data do medicamento (deve ser definida automaticamente no servidor).
 *               horario:
 *                 type: string
 *                 format: time
 *                 description: Horário do medicamento (deve ser definido automaticamente no servidor).
 *               tipo:
 *                 type: string
 *                 enum: ['Cápsula', 'Comprimido', 'Líquido', 'Creme', 'Gel', 'Inalação', 'Injeção', 'Spray']
 *                 description: Tipo do medicamento.
 *               quantidade:
 *                 type: number
 *                 minimum: 0.01
 *                 description: Quantidade do medicamento (com no mínimo duas casas após a vírgula).
 *               unidade:
 *                 type: string
 *                 enum: ['mg', 'mcg', 'g', 'mL', '%']
 *                 description: Unidade do medicamento.
 *               observacoes:
 *                 type: string
 *                 minLength: 10
 *                 maxLength: 1000
 *                 description: Observações do medicamento.
 *               statusSistema:
 *                 type: boolean
 *                 description: Status do sistema.
 *     responses:
 *       201:
 *         description: Medicamento cadastrado com sucesso.
 *       400:
 *         description: Requisição inválida. Mensagem de erro explicativa no corpo do response.
 *       500:
 *         description: Erro ao gerar a resposta.
 */
/**
 * @swagger
 * /api/medicamentos/{id}:
 *   put:
 *     tags:
 *       - Medicamentos
 *     summary: Atualiza um Medicamento pelo Identificador.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do medicamento a ser atualizado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeMedicamento:
 *                 type: string
 *                 minLength: 5
 *                 maxLength: 100
 *                 description: Nome do medicamento.
 *               data:
 *                 type: string
 *                 format: date
 *                 description: Data do medicamento (deve ser definida automaticamente no servidor).
 *               horario:
 *                 type: string
 *                 format: time
 *                 description: Horário do medicamento (deve ser definido automaticamente no servidor).
 *               tipo:
 *                 type: string
 *                 enum: ['Cápsula', 'Comprimido', 'Líquido', 'Creme', 'Gel', 'Inalação', 'Injeção', 'Spray']
 *                 description: Tipo do medicamento.
 *               quantidade:
 *                 type: number
 *                 minimum: 0.01
 *                 description: Quantidade do medicamento (com no mínimo duas casas após a vírgula).
 *               unidade:
 *                 type: string
 *                 enum: ['mg', 'mcg', 'g', 'mL', '%']
 *                 description: Unidade do medicamento.
 *               observacoes:
 *                 type: string
 *                 minLength: 10
 *                 maxLength: 1000
 *                 description: Observações do medicamento.
 *               statusSistema:
 *                 type: boolean
 *                 description: Status do sistema.
 *     responses:
 *       200:
 *         description: Medicamento atualizado com sucesso.
 *       400:
 *         description: Requisição inválida. Mensagem de erro explicativa no corpo do response.
 *       500:
 *         description: Erro ao gerar a resposta.
 */
/**
 * @swagger
 * /api/medicamentos/{id}:
 *   put:
 *     tags:
 *       - Medicamentos
 *     summary: Atualiza um Medicamento pelo Identificador.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do medicamento a ser atualizado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeMedicamento:
 *                 type: string
 *                 minLength: 5
 *                 maxLength: 100
 *                 description: Nome do medicamento.
 *               data:
 *                 type: string
 *                 format: date
 *                 description: Data do medicamento (deve ser definida automaticamente no servidor).
 *               horario:
 *                 type: string
 *                 format: time
 *                 description: Horário do medicamento (deve ser definido automaticamente no servidor).
 *               tipo:
 *                 type: string
 *                 enum: ['Cápsula', 'Comprimido', 'Líquido', 'Creme', 'Gel', 'Inalação', 'Injeção', 'Spray']
 *                 description: Tipo do medicamento.
 *               quantidade:
 *                 type: number
 *                 minimum: 0.01
 *                 description: Quantidade do medicamento (com no mínimo duas casas após a vírgula).
 *               unidade:
 *                 type: string
 *                 enum: ['mg', 'mcg', 'g', 'mL', '%']
 *                 description: Unidade do medicamento.
 *               observacoes:
 *                 type: string
 *                 minLength: 10
 *                 maxLength: 1000
 *                 description: Observações do medicamento.
 *               statusSistema:
 *                 type: boolean
 *                 description: Status do sistema.
 *     responses:
 *       200:
 *         description: Medicamento atualizado com sucesso.
 *       400:
 *         description: Requisição inválida. Mensagem de erro explicativa no corpo do response.
 *       500:
 *         description: Erro ao gerar a resposta.
 */
/**
 * @swagger
 * /api/medicamentos/{id}:
 *   get:
 *     tags:
 *       - Medicamentos
 *     summary: Retorna medicamentos por usuário.
 *     parameters:
 *       - in: query
 *         name: nomeUsuario
 *         schema:
 *           type: string
 *         description: Nome do usuário (se fornecido, retornará medicamentos relacionados a esse usuário).
 *     responses:
 *       200:
 *         description: Lista de medicamentos recuperada com sucesso.
 *       400:
 *         description: Requisição inválida. Mensagem de erro explicativa no corpo do response.
 *       500:
 *         description: Erro ao gerar a resposta.
 */
/**
 * @swagger
 * /api/medicamentos/{id}:
 *   delete:
 *     tags:
 *       - Medicamentos
 *     summary: Deleta um Medicamento por Identificador.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador do medicamento a ser deletado.
 *     responses:
 *       202:
 *         description: Medicamento deletado com sucesso.
 *       400:
 *         description: Requisição inválida. Mensagem de erro explicativa no corpo do response.
 *       500:
 *         description: Erro ao gerar a resposta.
 */



medicationRoutes
    .post('/api/medicamentos', validateCreateMedication.validateCreateMedication, createMedication)
    .delete('/api/medicamentos/:id',deleteMedicationById)
    .put('/api/medicamentos/:id', validateUpdateMedication.validateUpdateMedication, updateMedication)
    .get('/api/medicamentos', medicationRead)
    .get('/api/medicamentos/:id', medicationRead);

module.exports = medicationRoutes;