const connection = require("../database/index");
const { Sequelize } = require("sequelize");

const Patient = require('./patient');

const Adress = connection.define("adress", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cep: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  street: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  number: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  complement: {
    type: Sequelize.STRING,
  },
  neighborhood: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  reference: {
    type: Sequelize.STRING, 
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

Adress.hasOne(Patient, { sourceKey: 'id', foreignKey: 'adress' });
Patient.belongsTo(Adress, { foreignKey: 'adress', as: 'adress_id' });

module.exports = Adress;