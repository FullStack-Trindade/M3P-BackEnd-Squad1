
const connection = require("../database/index");
const { Sequelize } = require("sequelize");

const Usuario = require('./user')

const Patient = connection.define("patient", {
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
/*   adress: {
    type: Sequelize.JSONB,
    allowNull: false,
  }, */
});


  Patient.belongsTo(Usuario, {foreignKey: "id_user"});


module.exports = Patient;