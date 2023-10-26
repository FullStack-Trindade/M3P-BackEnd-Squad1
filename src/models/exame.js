const connection = require('../database/index');
const { Sequelize} = require('sequelize');

const Patient = require('./patient')

const Exam = connection.define('exam', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    id_pacient:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_doctor:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    examName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    dtExam: {
        type: Sequelize.DATE,
        allowNull: false,
    },

    examTime: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    examType: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    examLab: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    examUrl: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    examResults:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    statusExame: {
        type: Sequelize.BOOLEAN,        
        valueDefault: true
    },

});

   Exam.belongsTo(Patient, {foreignKey:"id_paciente"});

module.exports = Exam;
