const connection = require('../database/index');
const {Sequelize} = require('sequelize');

const Exercise = connection.define('exercise',{
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
        type:Sequelize.ENUM("RESISTÊNCIA AERÓBICA","RESISTÊNCIA MUSCULAR", "FLEXIBILIDADE", "FORÇA", "AGILIDADE", "OUTROS"),
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

module.exports = Exercise;