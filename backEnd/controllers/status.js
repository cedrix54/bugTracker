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