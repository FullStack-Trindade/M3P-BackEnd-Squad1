const connection = require('./../database/index');
const { Sequelize } = require('sequelize');

const Diet = connection.define('diet', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true,
        onUpdate: 'CASCADE'
    },
    id_patient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        references: {
            model: { tableName: 'patients', key: 'id' }
        }
    },
    id_doctor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        references: {
            model: { tableName: "users", key: "id" },
        },
    },
    diet_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        notEmpty: true
    },
    diet_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        notEmpty: true
    },
    diet_hour: {
        type: Sequelize.TIME,
        allowNull: false,
        notEmpty: true
    },
    diet_type: {
        type: Sequelize.ENUM(
            'CETOGÊNICA',
            'DASH',
            'DUKAN',
            'LOW CARB',
            'MEDITERRÂNEA',
            'PALEOLÍTICA',
            'OUTRA'
        ),
        allowNull: false,
        notEmpty: true
    },
    diet_description: {
        type: Sequelize.STRING(1024),
        allowNull: true
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        notEmpty: true,
        defaultValue: true
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

module.exports = Diet;