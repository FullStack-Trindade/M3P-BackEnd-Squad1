'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('exams', [
      {
        id_patient: 1,
        id_doctor: 2,
        name_exam: 'Raio-x',
        date_exam: '2023-10-30',
        hour_exam: '07:00:00',
        type_exam: 'Imagem',
        lab_exam: 'Bronstein',
        url_exam: '',
        result_exam: 'Osso fêmur apresenta fratura',
        status_exam: true
      },
      {
        id_patient: 2,
        id_doctor: 2,
        name_exam: 'Hemograma',
        date_exam: '2023-10-30',
        hour_exam: '15:00:00',
        type_exam: 'Análises Clínicas',
        lab_exam: 'Fleury',
        url_exam: '',
        result_exam: 'Hemograma dentro da normalidade',
        status_exam: true
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('exams', null, {});
  }
};
