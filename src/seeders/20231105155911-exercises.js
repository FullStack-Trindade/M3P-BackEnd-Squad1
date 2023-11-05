'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('exercises', [
      {
        id_patient: 1,
        id_nurse: 3,
        series_name: 'Exercícios para emagrecimento',
        date_exercise: '2023-10-30',
        hour_exercise: '07:00:00',
        type_exercise: 'RESISTÊNCIA AERÓBICA',
        amount_week: 3,
        descrition_exercise: 'Spinning e pular corda',
        status_exercise: true
      },
      {
        id_patient: 2,
        id_nurse: 3,
        series_name: 'Exercícios para ganho de força',
        date_exercise: '2023-10-30',
        hour_exercise: '15:00:00',
        type_exercise: 'RESISTÊNCIA MUSCULAR',
        amount_week: 3,
        descrition_exercise: 'Agachamento com peso, levantamento terra e flexão',
        status_exercise: true
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('exercises', null, {});
  }
};
