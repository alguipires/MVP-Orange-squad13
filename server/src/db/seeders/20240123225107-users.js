'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        uuid: 'svcYJgsqCGZnRw6VPVrUljodi9r6',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        password: '$2a$10$JwexSTwKKM.H1KeblNgsLugJ7IP58k9ddplQujltuAqBgw5ICE6eK',
        // password: 'admin_123',
        role: 'admin',
        avatar: 'https://static.vecteezy.com/ti/vetor-gratis/p3/2002263-personagem-de-avatar-de-homem-negro-com-barba-gratis-vetor.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: 'dpo04gsqCGZnRw6VPVrUljyLsWx1',
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane.doe@example.com',
        password: '$2a$10$Y2jVCM1GstrGAY6P2mgbFOsqZA9O39EQN5sjN8g2mObQdnm.l0tXW',
        // password: 'user_123',
        role: 'user',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEC3u0dRIAIrngR_mo_0VYhCwVUqBgdHztg&usqp=CAU',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        uuid: 'svcYJgsqCGZnRw6VPVrUljyLsWx1',
        first_name: 'Paulo',
        last_name: 'Belens',
        email: 'paulovictor55296@gmail.com',
        password: '$2a$10$JwexSTwKKM.H1KeblNgsLugJ7IP58k9ddplQujltuAqBgw5ICE6eK',
        // password: 'admin_123',
        role: 'admin',
        avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIJ_gIFY-Oet1YylxV3aEZn-CeWaMEY_1fqGSCRae_Npt49=s96-c',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
