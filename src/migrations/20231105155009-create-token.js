'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tokens', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_user: {
          type: Sequelize.INTEGER,
          required: true,
          references: {
              model: { tableName: 'users', key: 'id' }
          }
      },
      token: {
          type: Sequelize.STRING,
          required: true
      },
      created_at: {
          type: 'TIMESTAMP',
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          expires: 3600
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tokens');
  }
};
