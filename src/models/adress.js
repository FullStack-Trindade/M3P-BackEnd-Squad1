// const connection = require("../database/index");
// const { Sequelize } = require("sequelize");

// const Adress = connection.define("adress", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },

//   adress: {
//     type: Sequelize.JSONB,
//     allowNull: false,
//   },
// });

// module.exports = Adress;

const connection = require("../database/index");
const { Sequelize } = require("sequelize");

const Adress = connection.define("adress", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cep: {
    type: Sequelize.STRING, // Tipo de dado corrigido para string
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING, // Tipo de dado corrigido para string
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING, // Tipo de dado corrigido para string
    allowNull: false,
  },
  street: {
    type: Sequelize.STRING, // Tipo de dado corrigido para string
    allowNull: false,
  },
  number: {
    type: Sequelize.STRING, // Tipo de dado corrigido para string
    allowNull: false,
  },
  complement: {
    type: Sequelize.STRING, // Tipo de dado corrigido para string
  },
  neighborhood: {
    type: Sequelize.STRING, // Tipo de dado corrigido para string
    allowNull: false,
  },
  reference: {
    type: Sequelize.STRING, // Tipo de dado corrigido para string
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

module.exports = Adress;

