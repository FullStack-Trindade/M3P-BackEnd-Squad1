'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('types', [
      {
        id: 0, 
        descricao: 'Administrador'
      },
      {
        id: 1, 
        descricao: 'Médico'
      },
      {
        id: 2, 
        descricao: 'Enfermeiro'
      },
      {
        id: 3, 
        descricao: 'Paciente'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('types', null, {});
  }
};
