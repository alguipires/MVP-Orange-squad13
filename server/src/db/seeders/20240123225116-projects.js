'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projects', [
      {
        title: 'Project 1',
        tag: 'Tech',
        url: 'https://project1.com',
        description: 'Description for Project 1',
        user_id: 1,
        user_uuid: 'svcYJgsqCGZnRw6VPVrUljodi9r6',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Project 2',
        tag: 'Design',
        url: 'https://project2.com',
        description: 'Description for Project 2',
        user_id: 1,
        user_uuid: 'svcYJgsqCGZnRw6VPVrUljodi9r6',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Project 1',
        tag: 'Tech',
        url: 'https://project1.com',
        description: 'Description for Project 1',
        user_id: 2,
        user_uuid: 'dpo04gsqCGZnRw6VPVrUljyLsWx1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Project 2',
        tag: 'Design',
        url: 'https://project2.com',
        description: 'Description for Project 2',
        user_id: 2,
        user_uuid: 'dpo04gsqCGZnRw6VPVrUljyLsWx1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Paulo Teste 1',
        tag: 'Tech',
        url: 'https://project1.com',
        description: 'Description for Project 1',
        user_id: 2,
        user_uuid: 'svcYJgsqCGZnRw6VPVrUljyLsWx1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Paulo Teste 2',
        tag: 'Design',
        url: 'https://project2.com',
        description: 'Description for Project 2',
        user_id: 2,
        user_uuid: 'svcYJgsqCGZnRw6VPVrUljyLsWx1',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
