const {Sequelize} = require('sequelize');
const connection = require('../database')

const Token = connection.define('token', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: Sequelize.INTEGER,
        required: true,
        references: {
            model: { tablename: 'users', key: 'id' }
        }
    },
    token: {
        type: Sequelize.STRING,
        required: true
    },
    created_at: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        expires: 3600
    }
})

module.exports = Token; 