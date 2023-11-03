const connection = require('../database/index');
const {Sequelize} = require('sequelize');

const Patient = require('./patient')

const Exercise = connection.define('exercise',{

    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    
    id_patient: {
        type:Sequelize.INTEGER,
        allowNull: false,
    },

    id_nurse: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    seriesName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    dateExercise:{
        type: Sequelize.DATEONLY,
        allowNull: false,
    },

    hourExercise: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    typeExercise:{
        type:Sequelize.ENUM("RESISTÊNCIA AERÓBITCA","RESISTÊNCIA MUSCULAR", "FEXIBILIDADE", "FORÇA", "AGILIDADE", "OUTROS"),
        allowNull: false,
    },

    amountWeek: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    descritionExercise: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    statusExercise: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
});

/*     Exercise.belongTo(Patient, {foreingKey: "id_patient"});
    Exercise.belongTo(Nurse, {foreingKey: "id_nurse"}); */

module.exports = Exercise;