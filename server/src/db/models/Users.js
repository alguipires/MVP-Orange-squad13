const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      role: DataTypes.ENUM('admin', 'user'),
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    }
  );

  UserTable.associate = (models) => {
    UserTable.hasMany(models.Projects, {
      foreignKey: 'userId',
      as: 'Projects',
    });
  };

  return UserTable;
};

module.exports = UserSchema;
