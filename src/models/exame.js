const connection = require('../database/index');
const { Sequelize, DATE } = require('sequelize')

const Exame = connection.define('exam', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_patient:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: { tableName: 'patients', key: 'id' }
        }
    },
    id_doctor:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: { tableName: 'users', key: 'id' }
        }
    },
    nameExam: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dateExam: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    hourExam: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    typeExam: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    labExam: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    urlExam: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    resultExam:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    statusExam: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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

    // Exame.bleongsTo(Patient, {foreignKey:"idPatient"})

module.exports = Exame;