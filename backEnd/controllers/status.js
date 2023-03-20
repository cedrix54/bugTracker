const DB = require('../_utils/db.config')
const Status = DB.Status

exports.getAllStatuses = (req, res) => {
    Status.findAll()
        .then( statuses => res.json({data: statuses}))
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Database Error'})
        })
}
exports.addStatuses = (req, res) => {
    Status.create({status: 'New'})
    Status.create({status: 'Open'})
    Status.create({status: 'Fixed'})
    Status.create({status: 'Tested'})
    Status.create({status: 'Closed'})

    return res.json({message: 'Status Table Populated'})
}