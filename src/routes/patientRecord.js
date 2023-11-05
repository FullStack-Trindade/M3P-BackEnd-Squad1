const { Router } = require('express');

// MIDDLEWARES

// CONTROLLERS
const listPatientRecords = require('../controllers/patientRecord/listPatientRecords');
const searchPatientRecords = require ('../controllers/patientRecord/searchPatientRecord')
// ROUTES
const patientRecordRoutes = new Router();

/**
 * @swagger
 * /api/prontuarios:
 *   get:
 *     tags:
 *       - Prontuários
 *     summary: Lista todos os prontuários.
 *     description: Endpoint para listar todos os prontuários no sistema.
 *     responses:
 *       200:
 *         description: Prontuários listados com sucesso.
 *       400:
 *         description: Requisição inválida. Verifique os parâmetros, se aplicável.
 *       500:
 *         description: Erro ao processar a solicitação.
 */


patientRecordRoutes
    .get('/api/prontuarios', listPatientRecords)
    .get('/api/prontuarios/:id', searchPatientRecords);

module.exports = patientRecordRoutes;