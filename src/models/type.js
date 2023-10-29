const { Sequelize } = require('sequelize');
const connection = require('../config/database');
const sequelize = new Sequelize(connection);

const Type = sequelize.define('types', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
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

sequelize.sync().then(() => {
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