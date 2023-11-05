const { Router } = require("express");

// MIDDLEWARES

const validatePatientRequest = require("../middlewares/patient/validate-patient-request");
const validatePatientUpdate = require("../middlewares/patient/validate-patient-update");

// // CONTROLLERS

const createPatient = require("../controllers/patients/createPatients");
const updatePatient = require("../controllers/patients/updatePatients");
const patientList = require("../controllers/patients/patientList");
const searchPatients = require("../controllers/patients/searchPatients");
const deletePatient = require("../controllers/patients/deletePatients");
const searchPatientByIdUser = require("../controllers/patients/searchPatientByIdUser");

// // ROUTES
const patientRoutes = new Router();
/**
 * @swagger
 * /api/pacientes:
 *   post:
 *     tags:
 *       - Pacientes
 *     summary: Cadastrar um novo Paciente
 *     description: Rota para cadastrar um novo paciente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeCompleto:
 *                 type: string
 *                 description: Nome completo do paciente (mínimo 8 e máximo 64 caracteres).
 *               genero:
 *                 type: string
 *                 description: Gênero do paciente.
 *               dataNascimento:
 *                 type: string
 *                 description: Data de nascimento válida.
 *               cpf:
 *                 type: string
 *                 description: CPF no formato 000.000.000-00.
 *               rgOrgaoExpedidor:
 *                 type: string
 *                 description: Órgão expedidor do RG (máximo 20 caracteres).
 *               estadoCivil:
 *                 type: string
 *                 description: Estado civil.
 *               telefone:
 *                 type: string
 *                 description: Telefone no formato (99) 9 9999-99999.
 *               email:
 *                 type: string
 *                 description: E-mail válido.
 *               naturalidade:
 *                 type: string
 *                 description: Naturalidade do paciente (mínimo 8 e máximo 64 caracteres).
 *               contatoEmergencia:
 *                 type: string
 *                 description: Contato de emergência no formato (99) 9 9999-99999.
 *               alergias:
 *                 type: string
 *                 description: Lista de alergias (opcional).
 *               cuidadosEspecificos:
 *                 type: string
 *                 description: Lista de cuidados específicos (opcional).
 *               convenio:
 *                 type: string
 *                 description: Convênio (opcional).
 *               numeroConvenio:
 *                 type: string
 *                 description: Número do convênio (opcional).
 *               validadeConvenio:
 *                 type: string
 *                 description: Validade do convênio (data válida, opcional).
 *               endereco:
 *                 type: object
 *                 description: Objeto de endereço.
 *                 properties:
 *                   cep:
 *                     type: string
 *                     description: CEP.
 *                   cidade:
 *                     type: string
 *                     description: Cidade.
 *                   estado:
 *                     type: string
 *                     description: Estado.
 *                   logradouro:
 *                     type: string
 *                     description: Logradouro.
 *                   numero:
 *                     type: string
 *                     description: Número.
 *                   complemento:
 *                     type: string
 *                     description: Complemento.
 *                   bairro:
 *                     type: string
 *                     description: Bairro.
 *                   pontoReferencia:
 *                     type: string
 *                     description: Ponto de referência.
 *               statusSistema:
 *                 type: boolean
 *                 description: Status do sistema (leitura apenas).
 *     responses:
 *       201:
 *         description: Paciente cadastrado com sucesso.
 *       400:
 *         description: Requisição inválida com mensagem de erro explicativa no corpo.
 *       409:
 *         description: CPF e/ou E-mail já cadastrados com mensagem de erro explicativa no corpo.
 *
 *   put:
 *     tags:
 *       - Pacientes
 *     summary: Atualizar um Paciente por ID
 *     description: Rota para atualizar um paciente existente por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do paciente a ser atualizado.
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
 *                 description: Nome completo do paciente (mínimo 8 e máximo 64 caracteres).
 *               genero:
 *                 type: string
 *                 description: Gênero do paciente.
 *               dataNascimento:
 *                 type: string
 *                 description: Data de nascimento válida.
 *               estadoCivil:
 *                 type: string
 *                 description: Estado civil.
 *               telefone:
 *                 type: string
 *                 description: Telefone no formato (99) 9 9999-99999.
 *               email:
 *                 type: string
 *                 description: E-mail válido.
 *               naturalidade:
 *                 type: string
 *                 description: Naturalidade do paciente (mínimo 8 e máximo 64 caracteres).
 *               contatoEmergencia:
 *                 type: string
 *                 description: Contato de emergência no formato (99) 9 9999-99999.
 *               alergias:
 *                 type: string
 *                 description: Lista de alergias (opcional).
 *               cuidadosEspecificos:
 *                 type: string
 *                 description: Lista de cuidados específicos (opcional).
 *               convenio:
 *                 type: string
 *                 description: Convênio (opcional).
 *               numeroConvenio:
 *                 type: string
 *                 description: Número do convênio (opcional).
 *               validadeConvenio:
 *                 type: string
 *                 description: Validade do convênio (data válida, opcional).
 *               endereco:
 *                 type: object
 *                 description: Objeto de endereço.
 *                 properties:
 *                   cep:
 *                     type: string
 *                     description: CEP.
 *                   cidade:
 *                     type: string
 *                     description: Cidade.
 *                   estado:
 *                     type: string
 *                     description: Estado.
 *                   logradouro:
 *                     type: string
 *                     description: Logradouro.
 *                   numero:
 *                     type: string
 *                     description: Número.
 *                   complemento:
 *                     type: string
 *                     description: Complemento.
 *                   bairro:
 *                     type: string
 *                     description: Bairro.
 *                   pontoReferencia:
 *                     type: string
 *                     description: Ponto de referência.
 *               statusSistema:
 *                 type: boolean
 *                 description: Status do sistema (leitura apenas).
 *     responses:
 *       200:
 *         description: Paciente atualizado com sucesso.
 *       400:
 *         description: Requisição inválida com mensagem de erro explicativa no corpo.
 *       500:
 *         description: Erro ao gerar resposta.
 *
 * @swagger
 * /api/pacientes:
 *   get:
 *     tags:
 *       - Pacientes
 *     summary: Retorna todos os Pacientes
 *     description: Rota para obter todos os pacientes.
 *     responses:
 *       200:
 *         description: Lista de pacientes obtida com sucesso.
 *       400:
 *         description: Requisição inválida com mensagem de erro explicativa no corpo.
 *       500:
 *         description: Erro ao gerar resposta.
 *
 * @swagger
 * /api/pacientes/{id}:
 *   get:
 *     tags:
 *       - Pacientes
 *     summary: Retorna um Paciente por ID
 *     description: Rota para obter um paciente por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do paciente a ser obtido.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Paciente obtido com sucesso.
 *       400:
 *         description: Requisição inválida com mensagem de erro explicativa no corpo.
 *       500:
 *         description: Erro ao gerar resposta.
 *
 * @swagger
 * /api/pacientes/{id}:
 *   delete:
 *     tags:
 *       - Pacientes
 *     summary: Deleta um Paciente por ID
 *     description: Rota para deletar um paciente por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do paciente a ser deletado.
 *         schema:
 *           type: string
 *     responses:
 *       202:
 *         description: Paciente deletado com sucesso.
 *       400:
 *         description: Requisição inválida com mensagem de erro explicativa no corpo.
 *       500:
 *         description: Erro ao gerar resposta.
 */

patientRoutes
  .post("/api/pacientes", validatePatientRequest, createPatient)
  .put("/api/pacientes/:id", validatePatientUpdate, updatePatient)
  .get("/api/pacientes", patientList)
  .get("/api/pacientes/:id", searchPatients)
  .delete("/api/pacientes/:id", deletePatient)
  .get("/api/pacientes/usuario/:id", searchPatientByIdUser);

module.exports = patientRoutes;
