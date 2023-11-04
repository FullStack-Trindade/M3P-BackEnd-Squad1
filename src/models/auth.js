const connection = require('./../database/index');
const { Sequelize } = require('sequelize');

const Auth = connection.define('auth', {
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