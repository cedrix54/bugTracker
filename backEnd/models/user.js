const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    login: {
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: true
    }

  })
  return User
}