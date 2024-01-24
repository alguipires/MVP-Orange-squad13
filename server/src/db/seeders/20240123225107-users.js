'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        password: '$2a$10$JwexSTwKKM.H1KeblNgsLugJ7IP58k9ddplQujltuAqBgw5ICE6eK',
        // password: 'admin_123',
        role: 'admin',
        avatar: 'path/to/avatar.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane.doe@example.com',
        password: '$2a$10$Y2jVCM1GstrGAY6P2mgbFOsqZA9O39EQN5sjN8g2mObQdnm.l0tXW',
        // password: 'user_123',
        role: 'user',
        avatar: 'path/to/avatar.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
