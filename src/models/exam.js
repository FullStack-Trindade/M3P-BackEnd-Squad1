const connection = require('../database/index');
const { Sequelize} = require('sequelize');

const Patient = require('./patient')

const Exam = connection.define('exam', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    id_patient:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_doctor:{
        type: Sequelize.INTEGER,
        allowNull: false,
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
    },

});

    Exam.belongsTo(Patient, {foreignKey:"id_patient"});

module.exports = Exam;
