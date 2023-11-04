const connection = require('./../database/index');
const { Sequelize } = require('sequelize');

const User = require('./user');
const Patient = require('./patient');

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
        onUpdate: 'CASCADE'
    },
    id_doctor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE'
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

Diet.belongsTo(User, { /* sourcekey: 'id', */ foreignKey: 'id_doctor'});
Diet.belongsTo(Patient, {/*  sourcekey: 'id',  */foreignKey: 'id_patient'});

module.exports = Diet;