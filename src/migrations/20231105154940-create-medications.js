'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('medications', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_patient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: "patients", key: "id" },
        },
      },
      id_nurse: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: "users", key: "id" },
        },
      },
      name_medication: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_medication: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      hour_medication: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_medication: {
        type: Sequelize.ENUM("CAPSULA", "COMPRIMIDO", "LIQUIDO","CREME", "GEL","INALACAO", "INJECAO","SPRAY"),
      },
      amount_medication: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unit_medication: {
        type: Sequelize.ENUM("MG", "MCG", "G", "ML", "PERCENT"),
      },
      observation_medication: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: "TIMESTAMP",
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: "TIMESTAMP",
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('medications');
  }
};
