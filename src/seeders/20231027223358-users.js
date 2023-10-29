'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Maria Madalena Silva',
        gender: 'FEMININO',
        cpf: '22222222222',
        email: 'maria_mad@email.com',
        password: bcrypt.hashSync('22222222222', 10),
        phone: '(11) 9 1111-11111',
        id_type: 1,
        status: true
      },
      {
        name: 'José Santos',
        gender: 'MASCULINO',
        cpf: '33333333333',
        email: 'jose_s@email.com',
        password: bcrypt.hashSync('33333333333', 10),
        phone: '(22) 9 2222-22222',
        id_type: 2,
        status: true
      },
      {
        name: 'Ana Maria Lima',
        gender: 'FEMININO',
        cpf: '44444444444',
        email: 'ana_maria@email.com',
        password: bcrypt.hashSync('44444444444', 10),
        phone: '(33) 9 3333-33333',
        id_type: 3,
        status: true
      },
      {
        name: 'Lúcio Brasil',
        gender: 'MASCULINO',
        cpf: '55555555555',
        email: 'lucio@email.com',
        password: bcrypt.hashSync('55555555555', 10),
        phone: '(44) 9 4444-44444',
        id_type: 3,
        status: true
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
