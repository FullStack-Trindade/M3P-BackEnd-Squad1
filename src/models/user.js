const {Sequelize} = require('sequelize');
const connection = require('../database')
const Type = require('./type')

const Patient = require('./patient');
const Appointment = require('./appointment');
const Diet = require('./diet');
const Exam = require('./exam');
const Exercise = require('./exercise');
const Medication = require('./medication');
const Token = require('./token');

const User = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['MASCULINO', 'FEMININO', 'NAO_INFORMADO']
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //     model: { tableName: 'types', key: 'id_type' }
        // }
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
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

User.belongsTo(Type, { foreignKey: 'id_type' });

User.hasOne(Token, { sourceKey: 'id', foreignKey: 'id_user' });
Patient.belongsTo(User, { foreignKey: 'id_user' });

User.hasOne(Patient, { sourceKey: 'id', foreignKey: 'idUser' });
Patient.belongsTo(User, { foreignKey: 'idUser' });

User.hasMany(Appointment, { sourceKey: 'id', foreignKey: 'id_doctor' });
Appointment.belongsTo(User, { foreignKey: 'id_doctor' });

User.hasMany(Exam, { sourceKey: 'id', foreignKey: 'id_doctor' });
Exam.belongsTo(User, { foreignKey: 'id_doctor' });

User.hasMany(Exercise, { sourceKey: 'id', foreignKey: 'id_nurse' });
Exercise.belongsTo(User, { foreignKey: 'id_nurse' });

User.hasMany(Diet, { sourceKey: 'id', foreignKey: 'id_doctor' });
Diet.belongsTo(User, { foreignKey: 'id_doctor' });

User.hasMany(Medication, { sourceKey: 'id', foreignKey: 'id_nurse' });
Medication.belongsTo(User, { foreignKey: 'id_nurse' });

module.exports = User; 