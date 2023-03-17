const DB = require('./../_utils/db.config')
const Ticket = DB.Ticket


exports.getAllTickets = (req, res) => {
    Ticket.findAll()
        .then( tickets => res.json({data: tickets}))
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Database Error'})
        })
}

exports.addTicket = async (req, res) => {
    const {project, severity, summary, description, status, assignee} = req.body
    if (!project || !severity || !summary || !description || !status || !assignee){
        return res.status(400).json({message: 'Missing Data'})
    }
    try {
        let ticket = await Ticket.create(req.body)
        return res.json({message: 'Ticket Created', data: ticket})
    } catch (err){
        console.log(err)
        return res.status(500).json({message: 'Database Error'})
    }
}