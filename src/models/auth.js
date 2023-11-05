const { Sequelize } = require('sequelize');
const connection = require('../config/database');
const sequelize = new Sequelize(connection);

const Auth = sequelize.define('auths', {
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    token_user: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
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

module.exports = Auth;