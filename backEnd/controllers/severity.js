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
exports.addSeverities = (req, res) => {
    Severity.create({severity: 'Critical'})
    Severity.create({severity: 'Significant'})
    Severity.create({severity: 'Minor'})
    Severity.create({severity: 'Informative'})
    Severity.create({severity: 'Cosmetic'})

    return res.json({message: 'Severity Table Populated'})
}