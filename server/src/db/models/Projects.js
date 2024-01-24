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
    tag: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    url: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
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