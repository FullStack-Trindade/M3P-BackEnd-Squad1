const { Router } = require('express');

// MIDDLEWARES
const register = require('../middlewares/diet/validate-create-diet');
const update = require('../middlewares/diet/validate-update-diet');

// CONTROLLERS
const createDiet = require('../controllers/diet/createDiet');
const updateDiet = require('../controllers/diet/updateDiet');
const listDiets = require('../controllers/diet/listDiets');
const deleteDietById = require('../controllers/diet/deleteDietById');

// ROUTES
const dietRoutes = new Router();

/**
 * @swagger
 * /api/dietas:
 *   post:
 *     tags: 
 *       - Dietas
 *     summary: Cria uma nova dieta.
 *     description: Endpoint para criar uma nova dieta no sistema.
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Dados da nova dieta.
 *         schema:
 *           type: object
 *           properties:
 *             id_patient:
 *               type: number              
 *               description: Identificador do paciente.
 *             id_doctor:
 *               type: number              
 *               description: Identificador do médico.
 *             diet_name:
 *               type: string
 *               minLength: 5
 *               maxLength: 100
 *               description: Nome da dieta.
 *             diet_date:
 *               type: string
 *               format: date-time
 *               description: Data da dieta (deixar vazio para data atual).
 *             diet_hour:
 *               type: string
 *               format: time
 *               description: Horário da dieta (deixar vazio para horário atual).
 *             diet_type:
 *               type: string
 *               enum: [Low Carb, Dash, Paleolítica, Cetogênica, Dukan, Mediterrânea, Outra]
 *               description: Tipo de dieta.
 *             diet_description:
 *               type: string
 *               description: Descrição da dieta executada pelo paciente.
 *             status:
 *               type: boolean
 *               description: Status do Sistema (iniciar sempre como 'ativo').
 *     responses:
 *       201:
 *         description: Dieta criada com sucesso.
 *       400:
 *         description: Requisição inválida. Verifique os campos obrigatórios.
 *       500:
 *         description: Erro ao processar a solicitação.
 */

/**
 * @swagger
 * /api/dietas/{id}:
 *   put:
 *     tags:
 *       - Dietas
 *     summary: Atualiza uma dieta existente.
 *     description: Endpoint para atualizar uma dieta no sistema.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da dieta a ser atualizada.
 *       - in: body
 *         name: body
 *         required: true
 *         description: Dados da dieta a serem atualizados.
 *         schema:
 *           type: object
 *           properties:
 *             diet_name:
 *               type: string
 *               minLength: 5
 *               maxLength: 100
 *               description: Nome da dieta.
 *             diet_date:
 *               type: string
 *               format: date-time
 *               description: Data da dieta (deixar vazio para data atual).
 *             diet_hour:
 *               type: string
 *               format: time
 *               description: Horário da dieta (deixar vazio para horário atual).
 *             diet_type:
 *               type: string
 *               enum: [Low Carb, Dash, Paleolítica, Cetogênica, Dukan, Mediterrânea, Outra]
 *               description: Tipo de dieta.
 *             diet_description:
 *               type: string
 *               description: Descrição da dieta executada pelo paciente.
 *             status:
 *               type: boolean
 *               description: Status do Sistema (iniciar sempre como 'ativo').
 *     responses:
 *       200:
 *         description: Dieta atualizada com sucesso.
 *       400:
 *         description: Requisição inválida. Verifique os campos obrigatórios.
 *       500:
 *         description: Erro ao processar a solicitação.
 */

/**
 * @swagger
 * /api/dietas:
 *   get:
 *     tags:
 *       - Dietas
 *     summary: Retorna as dietas de um paciente.
 *     description: Endpoint para retornar as dietas de um paciente específico ou todas as dietas.
 *     parameters:
 *       - in: query
 *         name: Nome do Usuário
 *         required: false
 *         description: Nome do paciente para filtrar as dietas. Se não especificado, todas as dietas serão retornadas.
 *     responses:
 *       200:
 *         description: Dietas retornadas com sucesso.
 *       400:
 *         description: Requisição inválida. Verifique os parâmetros.
 *       500:
 *         description: Erro ao processar a solicitação.
 */

/**
 * @swagger
 * /api/dietas/{id}:
 *   delete:
 *     tags:
 *       - Dietas
 *     summary: Exclui uma dieta pelo seu ID.
 *     description: Endpoint para excluir uma dieta com base em seu ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da dieta a ser excluída.
 *     responses:
 *       202:
 *         description: Dieta excluída com sucesso.
 *       400:
 *         description: Requisição inválida. Verifique os parâmetros.
 *       500:
 *         description: Erro ao processar a solicitação.
 */

dietRoutes
    .post('/api/dietas', register.validateCreateDiet, createDiet)
    .put('/api/dietas/:id', update.validateCreateDiet, updateDiet)
    .get('/api/dietas', listDiets)
    .delete('/api/dietas/:id', deleteDietById);

module.exports = dietRoutes;