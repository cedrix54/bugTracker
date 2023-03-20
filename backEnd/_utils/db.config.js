const { Sequelize } = require('sequelize');

let sequelize = new Sequelize(
        process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    }
)

const db = {}

db.sequelize = sequelize
db.Ticket = require ('./../models/tickets')(sequelize)
db.Severity = require ('./../models/severity')(sequelize)
db.Status = require ('./../models/status')(sequelize)


db.Severity.hasMany(db.Ticket, {foreignKey: 'id'})
db.Ticket.belongsTo(db.Severity, {foreignKey: 'severity'})

db.Status.hasMany(db.Ticket, {foreignKey: 'id'})
db.Ticket.belongsTo(db.Status, {foreignKey: 'status'})

sequelize.sync({alter: true})
module.exports = db