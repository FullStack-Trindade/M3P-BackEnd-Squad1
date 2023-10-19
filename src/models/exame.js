const connection = require('../database/index');
const { Sequelize, DATE } = require('sequelize');

const Patient = require('./patient')

const Exame = connection.define('exame', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    id_paciente:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_medico:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    nomeExame: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    dataExame: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },

    horaExame: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    tipoExame: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    labExame: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    urlExame: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    resultaDoExame:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    statusExame: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },

});

    Exame.belongsTo(Patient, {foreignKey:"id_paciente"});

module.exports = Exame;