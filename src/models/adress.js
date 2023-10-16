const connection = require("../database/index");
const { Sequelize } = require("sequelize");

const Adress = connection.define("adress", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  adress: {
    type: Sequelize.JSONB,
    allowNull: false,
  },
});

module.exports = Adress;
