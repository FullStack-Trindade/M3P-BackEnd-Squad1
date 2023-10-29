const { Sequelize } = require('sequelize');
const connection = require('../config/database');
const sequelize = new Sequelize(connection);

const Patient = require('./patient');
const Appointment = require('./appointment');
const Exam = require('./exam');

const User = sequelize.define('users', {
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
        references: {
            model: { tableName: 'types', key: 'id' }
        }
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

User.hasOne(Patient, { sourceKey: 'id', foreignKey: 'idUser' });
Patient.belongsTo(User, { foreignKey: 'idUser' });

User.hasMany(Appointment, { sourceKey: 'id', foreignKey: 'id_doctor' });
Appointment.belongsTo(User, { foreignKey: 'id_doctor' });

User.hasMany(Exam, { sourceKey: 'id', foreignKey: 'id_doctor' });
Exam.belongsTo(User, { foreignKey: 'id_doctor' });

module.exports = User;