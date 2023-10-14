const {Sequelize} = require('sequelize');
const connection = require('../database')
const Tipo = require('./tipo')


const Usuario = connection.define('usuario', {
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_tipo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
});

Usuario.belongsTo(Tipo, { foreignKey: 'id_tipo' });
module.exports = Usuario; 