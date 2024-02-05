const aws = require('@aws-sdk/client-s3');
const s3 = new aws.S3();
const fs = require('fs'); //import filesystem
const path = require('path');
const { promisify } = require('util');

const ProjectsSchema = (sequelize, DataTypes) => {
  const Projects = sequelize.define(
    'Projects',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tag: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      userUuid: {
        allowNull: false,
        type: DataTypes.STRING,
        foreignKey: true,
      },
      url: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      imgFile: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      imgName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      timestamps: false,
      tableName: 'projects',
      underscored: true,
    }
  );

  Projects.associate = (models) => {
    Projects.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'users',
    });
  };

  // Adicionando um gancho de pré-processamento antes de criar ou atualizar um registro
  Projects.beforeCreate(function (project, options) {
    if (!project.imgFile) {
      project.imgFile = `${process.env.API_URL}/files/${project.imgName}`;
      console.log('url de salvamento da img>>> ', project.imgFile); //TODO retirar
    }
  });

  // Adicionando um gancho de pré-processamento antes de deletar um registro
  Projects.beforeDestroy(async (project, options) => {
    if (process.env.STORAGE_TYPE === 's3') {
      return s3
        .deleteObject({
          Bucket: process.env.AWS_BUCKET,
          Key: project.imgName,
        })
        .promise();
    } else {
      return promisify(fs.unlink)(
        path.resolve(__dirname, '..', 'public', 'uploads', project.imgName)
      );
    }
  });

  // Projects.associate = (models) => {
  //   Projects.belongsTo(models.Users, {
  //     foreignKey: 'userUuid',
  //     as: 'Users',
  //   });
  // };

  return Projects;
};

module.exports = ProjectsSchema;
