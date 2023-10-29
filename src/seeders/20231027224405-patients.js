'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('patients', [
      {
        id_user: 4,
        birth: '2000-05-12',
        marital_status: 'SOLTEIRO(A)',
        rg: '11.111.111-11',
        orgao_expedidor: 'Detran',
        birthplace: 'Florianópolis',
        emergency_contact: '(99) 9 9999-99999',
        alergies_list: 'Amendoim',
        specific_cares: 'Diabetes tipo 1',
        health_insurance: 'Amil',
        insurance_number: '123456',
        insurance_vality: '2025-10',
        adress: 1,
        status: true
      },
      {
        id_user: 5,
        birth: '1994-09-30',
        marital_status: 'UNIAO_ESTAVEL',
        rg: '22.222.222-22',
        orgao_expedidor: 'Detran',
        birthplace: 'Santa Maria',
        emergency_contact: '(88) 9 8888-88888',
        alergies_list: '',
        specific_cares: '',
        health_insurance: 'SUS',
        insurance_number: '789123',
        insurance_vality: '',
        adress: 2,
        status: true
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('patients', null, {});
  }
};
