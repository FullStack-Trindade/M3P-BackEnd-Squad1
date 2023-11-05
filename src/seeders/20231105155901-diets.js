'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('diets', [
      {
        id_patient: 1,
        id_doctor: 2,
        diet_name: 'Dieta para emagrecimento',
        diet_date: '2023-10-30',
        diet_hour: '07:00:00',
        diet_type: 'LOW CARB',
        diet_description: 'Paciente está em programa de emagrecimento para possível cirurgia bariátrica',
        status: true
      },
      {
        id_patient: 2,
        id_doctor: 2,
        diet_name: 'Dieta para melhoria da função intestinal',
        diet_date: '2023-10-30',
        diet_hour: '15:00:00',
        diet_type: 'MEDITERRÂNEA',
        diet_description: 'Paciente relata constipação prolongada por vários dias. Prevê maior ingestão de fibras.',
        status: true
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('diets', null, {});
  }
};
