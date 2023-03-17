const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Severity extends Model {
  }
  Severity.init({
    idSeverity: DataTypes.INTEGER,
    severity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Severity',
  });
  return Severity;
};