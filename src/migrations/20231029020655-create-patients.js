'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'users', key: 'id' }
        }
      },
      birth: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      marital_status: {
        type: Sequelize.ENUM(
          "SOLTEIRO(A)",
          "CASADO(A)",
          "DIVORCIADO(A)",
          "VIUVO(A)",
          "SEPARADO(A)",
          "UNIAO_ESTAVEL"
        ),
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orgao_expedidor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthplace: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      emergency_contact: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alergies_list: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      specific_cares: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      health_insurance: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      insurance_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      insurance_vality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adress: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'adresses', key: 'id' }
        }
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        notEmpty: true,
        defaultValue: true
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
    await queryInterface.dropTable('patients');
  }
};