const {DataTypes} = require ('sequelize')

module.exports = (sequelize) => {
    const Ticket = sequelize.define('Ticket', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        project: {
            type: DataTypes.INTEGER(10),
            defaultValue: 0,
            allowNull: false
        },
        severity: {
            type: DataTypes.INTEGER(10),
            defaultValue: 0,
            allowNull: false
        },
        summary: {
            type: DataTypes.STRING(100),
            defaultValue: '',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER(10),
            defaultValue: 0,
            allowNull: false
        },
        assignee: {
            type: DataTypes.INTEGER(10),
            defaultValue: 0,
            allowNull: false
        }
    })
    return Ticket
}