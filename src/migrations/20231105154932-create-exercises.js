'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('exercises', {
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
      series_name: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      date_exercise:{
          type: Sequelize.DATEONLY,
          allowNull: false,
      },
      hour_exercise: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      type_exercise:{
          type:Sequelize.ENUM("RESISTÊNCIA AERÓBICA","RESISTÊNCIA MUSCULAR", "FEXIBILIDADE", "FORÇA", "AGILIDADE", "OUTROS"),
          allowNull: false,
      },
      amount_week: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      descrition_exercise: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      status_exercise: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('exercises');
  }
};
