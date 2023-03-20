const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Severity = sequelize.define('Severity', {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    severity: {
        type: DataTypes.STRING(100),
        defaultValue: 0,
        allowNull: false
    }
  })
  return Severity
}