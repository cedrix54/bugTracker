'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Statuses', [{
      status: 'New',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      status: 'Open',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      status: 'Fixed',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      status: 'Tested',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      status: 'Closed',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};
