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
/**
 * @swagger
 * /api/prontuarios/:id?name=name:
 *   get:
 *     tags:
 *       - Prontuários
 *     summary: Busca todos os Prontuários por Paciente
 *     description: Busca todos os Prontuários associados a um paciente com base no Nome ou ID do Paciente.
 *     parameters:
 *       - in: query
 *         name: nomePaciente
 *         schema:
 *           type: string
 *         description: Nome do Paciente.
 *       - in: query
 *         name: idPaciente
 *         schema:
 *           type: integer
 *         description: ID do Paciente.
 *     responses:
 *       '200':
 *         description: Requisição bem-sucedida. Retorna os prontuários do paciente.
 *       '400':
 *         description: Requisição inválida. Retorna uma mensagem de erro explicativa no corpo do response.
 *       '500':
 *         description: Erro ao gerar a resposta. Retorna uma mensagem de erro no corpo do response.
 */

patientRecordRoutes
    .get('/api/prontuarios', listPatientRecords)
    .get('/api/prontuarios/:id', searchPatientRecords);

module.exports = patientRecordRoutes;