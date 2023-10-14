const {Sequelize} = require('sequelize')
const connection = require('../database')

const Tipo = connection.define('tipo', {
    id_tipo: {
        type: Sequelize.INTEGER,        
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

connection.sync().then(() => {
    Tipo.findOrCreate({
      where: { id_tipo: 0, descricao: 'Administrador' }
    });
    Tipo.findOrCreate({
      where: { id_tipo: 1,descricao: 'Medico' }
    });
    Tipo.findOrCreate({
      where: { id_tipo: 2,descricao: 'Enfermeiro' }
    });
    Tipo.findOrCreate({
      where: { id_tipo: 3,descricao: 'Paciente' }
    });
  });

  module.exports = Tipo; 