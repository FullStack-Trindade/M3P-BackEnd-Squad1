'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('auths', {
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      token_user: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      id_type: {
          type: Sequelize.INTEGER,
          allowNull: false,
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('auths');
  }
};
