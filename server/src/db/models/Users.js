const UserSchema = (sequelize, DataTypes) => { 
  const UserTable = sequelize.define('Users', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      role: DataTypes.ENUM('admin', 'user'),
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
  }, {
      tableName: 'users',
      timestamps: false,
      underscored: true,
  });

  UserTable.associate = (models) => {
      UserTable.hasMany(models.Projects,
          { foreignKey: 'userId', as: 'Projects' });
  };

  return UserTable;
}

module.exports = UserSchema;