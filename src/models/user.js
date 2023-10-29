const { Sequelize } = require('sequelize');
const connection = require('../config/database');
const sequelize = new Sequelize(connection);

const Type = require('./type')

const User = sequelize.define('users', {
    id: {
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
    id_type: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    phone: {
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

User.belongsTo(Type, { foreignKey: 'id_type' });

module.exports = User;