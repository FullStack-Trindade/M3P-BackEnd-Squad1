const connection = require("../database/index");
const { Sequelize } = require("sequelize");

const Medication = connection.define("medication", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_patient: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: { tableName: "patients", key: "id" },
    },
  },
  id_nurse: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: { tableName: "users", key: "id" },
    },
  },
  nameMedication: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateMedication: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  hourMedication: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  typeMedication: {
    type: Sequelize.ENUM("CAPSULA", "COMPRIMIDO", "LIQUIDO","CREME", "GEL","INALACAO", "INJECAO","SPRAY"),
  },
  amountMedication: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  unitMedication: {
    type: Sequelize.ENUM("MG", "MCG", "G", "ML", "PERCENT"),
  },
  observationMedication: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  created_at: {
    type: "TIMESTAMP",
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  updated_at: {
    type: "TIMESTAMP",
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
});

module.exports = Medication;
