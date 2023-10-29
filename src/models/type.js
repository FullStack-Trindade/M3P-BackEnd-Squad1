const { Sequelize } = require('sequelize');
const connection = require('../config/database');
const sequelize = new Sequelize(connection);

const User = require('./user');

const Type = sequelize.define('types', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  descricao: {
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

Type.hasOne(User, { sourceKey: 'id', foreignKey: 'id_type' });
User.belongsTo(Type, { foreignKey: 'id_type' });

module.exports = Type;