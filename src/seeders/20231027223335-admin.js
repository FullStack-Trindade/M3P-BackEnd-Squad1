'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        gender: 'NAO_INFORMADO',
        cpf: '11111111111',
        email: 'admin@email.com',
        password: bcrypt.hashSync('admin@email.com', 10),
        phone: '(00) 0 0000-00000',
        id_type: 0,
        status: true
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
