'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Severities', [{
      severity: 'Level 1 - Critical',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      severity: 'Level 2 - Significant',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      severity: 'Level 3 - Minor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      severity: 'Level 4 - Informative',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      severity: 'Level 5 - Cosmetic',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Severities', null, {});
  }
};
