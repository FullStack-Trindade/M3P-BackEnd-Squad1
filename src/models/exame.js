const connection = require('../database/index');
const { Sequelize, DATE } = require('sequelize')

const Exame = connection.define('exame', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    id_pacient:{
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
        type: Sequelize.TIME,
        allowNull: false,
    },

    tipoExame: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    labExame: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    urlExame: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    resultadoExame: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    statusExame: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },

});

    Exame.bleongsTo(Patient, {foreignKey:"idPatient"})

module.exports = Exame;