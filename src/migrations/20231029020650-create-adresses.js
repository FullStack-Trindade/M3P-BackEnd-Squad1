'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('adresses', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cep: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      complement: {
        type: Sequelize.STRING,
      },
      neighborhood: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reference: {
        type: Sequelize.STRING, 
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('adresses');
  }
};