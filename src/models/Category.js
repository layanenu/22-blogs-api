module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    },
    {
      tableName: 'Categorys',
      timestamps: false,
      underscored: true,
    });
    return Category;
  };