const { Sequelize } = require('sequelize')
const connection = require('../database')

const Type = connection.define('type', {
  idType: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

connection.sync().then(() => {
  Type.findOrCreate({
    where: { idType: 0, descricao: 'Administrador' }
  });
  Type.findOrCreate({
    where: { idType: 1, descricao: 'Medico' }
  });
  Type.findOrCreate({
    where: { idType: 2, descricao: 'Enfermeiro' }
  });
  Type.findOrCreate({
    where: { idType: 3, descricao: 'Paciente' }
  });
});

module.exports = Type; 