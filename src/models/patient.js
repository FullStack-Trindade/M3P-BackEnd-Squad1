const connection = require("../database/index");
const { Sequelize } = require("sequelize");

const Appointment = require('./appointment');
const Exam = require('./exame');

const Patient = connection.define("patient", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idUser: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: { tableName: 'users', key: 'id' }
    }
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
  adressId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: { tableName: 'adresses', key: 'id' }
    }
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    notEmpty: true,
    defaultValue: true
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

Patient.hasMany(Appointment, { sourceKey: 'id', foreignKey: 'id_patient' });
Appointment.belongsTo(Patient, { foreignKey: 'id_patient' });

Patient.hasMany(Exam, { sourceKey: 'id', foreignKey: 'id_patient' });
Exam.belongsTo(Patient, { foreignKey: 'id_patient' });

module.exports = Patient;