'use strict';
// const users = await queryInterface.sequelize.query(`SELECT id from USERS`);

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('appointments', [
      {
        id_patient: 1,
        id_doctor: 2,
        appointment_reason: 'Dor na perna',
        appointment_date: '2023-10-28',
        appointment_hour: '01:00:00',
        problem_description: 'Dor na perna após queda da própria altura',
        medication_prescribed: 'Dipirona',
        dosage_precautions: '1 comprimido de 1g a cada 8 horas',
        status: true
      },
      {
        id_patient: 2,
        id_doctor: 2,
        appointment_reason: 'Dor de dente',
        appointment_date: '2023-10-28',
        appointment_hour: '15:00:00',
        problem_description: 'Dor no siso, lado esquerdo',
        medication_prescribed: '',
        dosage_precautions: '',
        status: true
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('appointments', null, {});
  }
};