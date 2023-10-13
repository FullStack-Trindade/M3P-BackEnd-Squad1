const connection = require('./../database/index');
const { Sequelize } = require('sequelize');

const Appointment = connection.define('consulta', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true,
        onUpdate: 'CASCADE'
    },
    // id_paciente: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     onUpdate: 'CASCADE'
    // },
    // id_medico: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     onUpdate: 'CASCADE'
    // },
    motivo_consulta: {
        type: Sequelize.STRING(68),
        allowNull: false,
        notEmpty: true
    },
    data_consulta: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        notEmpty: true
    },
    hora_consulta: {
        type: Sequelize.TIME,
        allowNull: false,
        notEmpty: true
    },
    descricao_problema: {
        type: Sequelize.STRING(1024),
        allowNull: false,
        notEmpty: true
    },
    medicacao_receitada: {
        type: Sequelize.STRING(1024),
        allowNull: true
    },
    dosagem_precaucoes: {
        type: Sequelize.STRING(256),
        allowNull: false,
        defaultValue: 'Medicação não receitada.'
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        notEmpty: true,
        defaultValue: false
    }
});

module.exports = Appointment;