const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Project = sequelize.define('Project', {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: true
    }
  })
  return Project
}