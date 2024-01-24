const ProjectsSchema = (sequelize, DataTypes) => {
  const Projects = sequelize.define('Projects', {
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
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  Projects.associate = (models) => {
    Projects.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'users' });
  };

  return Projects;
};

module.exports = ProjectsSchema;