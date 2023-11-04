const { Sequelize } = require('sequelize')
const connection = require('../database')

const Type = connection.define('type', {
  id_type: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

connection.sync().then(() => {
  Type.findOrCreate({
    where: { id_type: 0, descricao: 'Administrador' }
  });
  Type.findOrCreate({
    where: { id_type: 1, descricao: 'Medico' }
  });
  Type.findOrCreate({
    where: { id_type: 2, descricao: 'Enfermeiro' }
  });
  Type.findOrCreate({
    where: { id_type: 3, descricao: 'Paciente' }
  });
});

module.exports = Type; 