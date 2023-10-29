'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('adresses', [
      {
        cep: '88058762',
        city: 'Florianópolis',
        state: 'SC',
        street: 'Servidão Navegantes do Mar',
        number: '20',
        complement: '',
        neighborhood: 'Ingleses do Rio Vermelho',
        reference: 'próximo à árvore'
      },
      {
        cep: '88048404',
        city: 'Florianópolis',
        state: 'SC',
        street: 'Servidão Manoel Adolpho Gonçalvess',
        number: '110',
        complement: '',
        neighborhood: 'Rio Tavares',
        reference: 'próximo ao poste torto'
      }
  ])},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('adresses', null, {});
  }
};
