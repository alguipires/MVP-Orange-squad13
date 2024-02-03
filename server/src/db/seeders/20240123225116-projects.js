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
        url: 'https://classic.exame.com/wp-content/uploads/2023/07/alternatifs-de-midjourney.jpg?quality=70&strip=info&w=1024',
        description: 'Description for Project 1',
        user_id: 2,
        user_uuid: 'svcYJgsqCGZnRw6VPVrUljyLsWx1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Paulo Teste 2',
        tag: 'Design',
        url: 'https://t.ctcdn.com.br/MAiDMlUqZs4khOpe-vzzsaE1tTk=/640x360/smart/i743626.jpeg',
        description: 'Description for Project 2',
        user_id: 2,
        user_uuid: 'svcYJgsqCGZnRw6VPVrUljyLsWx1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Paulo Teste 3',
        tag: 'Design',
        url: 'https://www.mundodomarketing.com.br/wp-content/uploads/2023/01/90-do-conteudo-online-podera-ser-gerado-por-IA-ate-2025-1200x675.jpg',
        description: 'Description for Project 3',
        user_id: 2,
        user_uuid: 'svcYJgsqCGZnRw6VPVrUljyLsWx1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Paulo Teste 4',
        tag: 'Design',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnXCBD3olgcBJtZE0uKxrX_er2gB3iMRK88d9GgD0nHu2hABglua0NK5zhyQRaakGei0&usqp=CAU',
        description: 'Description for Project 4',
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
