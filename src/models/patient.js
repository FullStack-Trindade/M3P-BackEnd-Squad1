const { Sequelize } = require('sequelize');
const connection = require('../config/database');
const sequelize = new Sequelize(connection);

/* const Appointment = require("./appointment"); */
// const Exam = require("./exame");
const User = require("./user");

const Patient = sequelize.define("patients", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idUser: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  birth: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  maritalStatus: {
    type: Sequelize.ENUM(
      "SOLTEIRO(A)",
      "CASADO(A)",
      "DIVORCIADO(A)",
      "VIUVO(A)",
      "SEPARADO(A)",
      "UNIAO_ESTAVEL"
    ),
  },
  rg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  orgaoExpedidor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  birthplace: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  emergencyContact: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  alergiesList: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  specificCares: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  healthInsurance: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  insuranceNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  insuranceVality: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  adress: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: 'TIMESTAMP',
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updated_at: {
    type: 'TIMESTAMP',
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});

Patient.belongsTo(User, {foreignKey: "idUser"});

/* Patient.hasMany(Appointment, { sourceKey: 'id', foreignKey: 'id_patient'});
Appointment.belongsTo(Patient, { foreignKey: 'id_patient' }); */

// Patient.hasMany(Exam, { sourceKey: 'id', foreignKey: 'id_pacient'});
// Exam.belongsTo(Patient, { foreignKey: 'id_pacient' });

module.exports = Patient;