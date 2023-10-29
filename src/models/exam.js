const { Sequelize } = require('sequelize');
const connection = require('../config/database');
const sequelize = new Sequelize(connection);

const Patient = require('./patient')

const Exam = sequelize.define('exams', {
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
        defaultValue: true
    },

});

Exam.belongsTo(Patient, {foreignKey:"id_patient"});

module.exports = Exam;