const { Sequelize } = require('sequelize');
const connection = require('../config/database');
const sequelize = new Sequelize(connection);

const Token = sequelize.define('tokens', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: Sequelize.INTEGER,
        required: true,
        references: {
            model: { tableName: 'users', key: 'id' }
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