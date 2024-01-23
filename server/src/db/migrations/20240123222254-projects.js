'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'projects', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        tag: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        url: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        description: {
          allowNull: false,
          type: Sequelize.STRING,
        },        
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects');
  }
};
