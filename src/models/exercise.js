const { Sequelize } = require('sequelize');
const connection = require('../config/database');
const sequelize = new Sequelize(connection);

const Exercise = sequelize.define('exercises',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_patient: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: { tableName: 'patients', key: 'id' }
        }
    },
    id_nurse: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: { tableName: 'users', key: 'id' }
        }
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
        type:Sequelize.ENUM("RESISTÊNCIA AERÓBICA","RESISTÊNCIA MUSCULAR", "FEXIBILIDADE", "FORÇA", "AGILIDADE", "OUTROS"),
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

module.exports = Exercise;