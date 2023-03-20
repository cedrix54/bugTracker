const DB = require('./../_utils/db.config')
const Severity = DB.Severity

exports.getAllSeverities = (req, res) => {
    Severity.findAll()
        .then( severities => res.json({data: severities}))
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Database Error'})
        })
}