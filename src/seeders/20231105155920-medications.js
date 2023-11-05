'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('medications', [
      {
        id_patient: 1,
        id_nurse: 3,
        name_medication: 'Ozempic',
        date_medication: '2023-10-30',
        hour_medication: '07:00:00',
        type_medication: 'INJECAO',
        amount_medication: 0.25,
        unit_medication: 'MG',
        observation_medication: 'Uma vez por semana',
        status: true
      },
      {
        id_patient: 2,
        id_nurse: 3,
        name_medication: 'BCAA',
        date_medication: '2023-10-30',
        hour_medication: '15:00:00',
        type_medication: 'CAPSULA',
        amount_medication: 1.88,
        unit_medication: 'G',
        observation_medication: 'Tomar até 3 vezes ao dia',
        status: true
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('medications', null, {});
  }
};
