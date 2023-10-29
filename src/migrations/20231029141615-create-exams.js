'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exams', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_patient:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: { tableName: 'patients', key: 'id' }
          }
      },
      id_doctor:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: { tableName: 'users', key: 'id' }
          }
      },
      name_exam: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      date_exam: {
          type: Sequelize.DATEONLY,
          allowNull: false,
      },
      hour_exam: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      type_exam: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      lab_exam: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      url_exam: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      result_exam:{
          type: Sequelize.STRING,
          allowNull: false,
      },
      status_exam: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
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
    await queryInterface.dropTable('exams');
  }
};