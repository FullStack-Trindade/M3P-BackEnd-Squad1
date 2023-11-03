const connection = require('./../database/index');
const { Sequelize } = require('sequelize');

// const Patient = require('./patient');
// const User = require('./user');

const Appointment = connection.define('appointment', {
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
            model: { tableName: 'users', key: 'id' }
        }
    },
    appointment_reason: {
        type: Sequelize.STRING(64),
        allowNull: false,
        notEmpty: true
    },
    appointment_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        notEmpty: true
    },
    appointment_hour: {
        type: Sequelize.TIME,
        allowNull: false,
        notEmpty: true
    },
    problem_description: {
        type: Sequelize.STRING(1024),
        allowNull: false,
        notEmpty: true
    },
    medication_prescribed: {
        type: Sequelize.STRING(1024),
        allowNull: true
    },
    dosage_precautions: {
        type: Sequelize.STRING(256),
        allowNull: false,
        defaultValue: 'Medicação não receitada.'
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

Appointment.belongsTo(User, { sourcekey: 'id', foreignKey: 'id_doctor'});
Appointment.belongsTo(User, { sourcekey: 'id', foreignKey: 'id_patient'});

module.exports = Appointment;