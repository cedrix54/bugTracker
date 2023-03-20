const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Status = sequelize.define('Status', {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    status: {
        type: DataTypes.STRING(100),
        defaultValue: 0,
        allowNull: false
    }
  })
  return Status
}