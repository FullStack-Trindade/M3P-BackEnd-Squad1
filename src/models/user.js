const {Sequelize} = require('sequelize');
const connection = require('../database')
const Type = require('./type')


const User = connection.define('user', {
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['MASCULINO', 'FEMININO', 'NAO_INFORMADO']
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idType: {
        type: Sequelize.ENUM,
        values: ['MEDICO', 'ADMINISTRADOR', 'ENFERMEIRO'],
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    // phone: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
});

User.belongsTo(Type, { foreignKey: 'id_type' });
module.exports = User; 