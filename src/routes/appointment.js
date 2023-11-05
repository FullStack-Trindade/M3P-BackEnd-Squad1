const { Router } = require('express');

// MIDDLEWARES
const register = require('../middlewares/appointment/validate-create-appointment');
const update = require('../middlewares/appointment/validate-update-appointment');

// CONTROLLERS
const createAppointment = require('../controllers/appointment/createAppointment');
const updateAppointment = require('../controllers/appointment/updateAppointment');
const listAppointments = require('../controllers/appointment/listAppointments');
const deleteAppointmentById = require('../controllers/appointment/deleteAppointmentById');

// ROUTES
const appointmentRoutes = new Router();

/**
 * @swagger
 * /api/consultas:
 *   post:
 *     tags:
 *       - Consultas
 *     summary: Cria uma nova Consulta.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_patient:
 *                 type: number              
 *                 description: Identificador do paciente.
 *               id_doctor:
 *                 type: number              
 *                 description: Identificador do médico.
 *               appointment_reason:
 *                 type: string
 *                 minLength: 8
 *                 maxLength: 64
 *                 description: Motivo da consulta.
 *               appointment_date:
 *                 type: string
 *                 format: date
 *                 description: Data da consulta (deve ser definida automaticamente no servidor).
 *               appointment_hour:
 *                 type: string
 *                 format: time
 *                 description: Horário da consulta (deve ser definido automaticamente no servidor).
 *               problem_description:
 *                 type: string
 *                 minLength: 16
 *                 maxLength: 1024
 *                 description: Descrição do problema.
 *               medication_prescribed:
 *                 type: string
 *                 description: Descrição da medicação receitada (não obrigatório).
 *               dosage_precautions:
 *                 type: string
 *                 minLength: 16
 *                 maxLength: 256
 *                 description: Dosagem e precauções.
 *               status:
 *                 type: boolean
 *                 description: Status do sistema.
 *     responses:
 *       201:
 *         description: Consulta criada com sucesso.
 *       400:
 *         description: Requisição inválida. Mensagem de erro explicativa no corpo do response.
 *       500:
 *         description: Erro ao gerar a resposta.
 */
/**
 * @swagger
 * /api/consultas/{id}:
 *    
 *   put:
 *     tags:
 *       - Consultas
 *     summary: Atualiza uma Consulta por Identificador.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da consulta a ser atualizada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:             
 *               appointment_reason:
 *                 type: string
 *                 minLength: 8
 *                 maxLength: 64
 *                 description: Motivo da consulta.
 *               appointment_date:
 *                 type: string
 *                 format: date
 *                 description: Data da consulta (deve ser definida automaticamente no servidor).
 *               appointment_hour:
 *                 type: string
 *                 format: time
 *                 description: Horário da consulta (deve ser definido automaticamente no servidor).
 *               problem_description:
 *                 type: string
 *                 minLength: 16
 *                 maxLength: 1024
 *                 description: Descrição do problema.
 *               medication_prescribed:
 *                 type: string
 *                 description: Descrição da medicação receitada (não obrigatório).
 *               dosage_precautions:
 *                 type: string
 *                 minLength: 16
 *                 maxLength: 256
 *                 description: Dosagem e precauções.
 *               status:
 *                 type: boolean
 *                 description: Status do sistema.
 *     responses:
 *       200:
 *         description: Consulta atualizada com sucesso.
 *       400:
 *         description: Requisição inválida. Mensagem de erro explicativa no corpo do response.
 *       500:
 *         description: Erro ao gerar a resposta.
 */
/**
 * @swagger
 * /api/consultas:
 *      
 *   get:
 *     tags:
 *       - Consultas
 *     summary: Busca de todas as Consultas.
 *     parameters:
 *       - in: query
 *         name: userID
 *         schema:
 *           type: integer
 *         description: ID do usuário (se fornecido, retornará as consultas relacionadas a esse usuário).
 *     responses:
 *       200:
 *         description: Lista de consultas recuperada com sucesso.
 *       400:
 *         description: Requisição inválida. Mensagem de erro explicativa no corpo do response.
 *       500:
 *         description: Erro ao gerar a resposta.
 */
/**
 * @swagger
 * /api/consultas/{id}:
 *   
 *   delete:
 *     tags:
 *       - Consultas
 *     summary: Deleta uma Consulta por Identificador.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identificador da consulta a ser deletada.
 *     responses:
 *       202:
 *         description: Consulta deletada com sucesso.
 *       400:
 *         description: Requisição inválida. Mensagem de erro explicativa no corpo do response.
 *       500:
 *         description: Erro ao gerar a resposta.
 */

appointmentRoutes
    .post('/api/consultas', register.validateCreateAppointment, createAppointment)
    .put('/api/consultas/:id', update.validateUpdateAppointment, updateAppointment)
    .get('/api/consultas', listAppointments)
    .delete('/api/consultas/:id', deleteAppointmentById);

module.exports = appointmentRoutes;