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
exports.getTicket = async (req, res) => {
    let ticketId = parseInt(req.params.id)

    if(!ticketId) {
        return res.status(400).json({message: 'Missing Parameter'})
    }

    try{
        let ticket = await Ticket.findOne({ where: {id: ticketId}})
        if (ticket === null){
            return res.status(404).json({message: 'Ticket does not exist'})
        }
        return res.json({data: ticket})
    } catch{
        return res.status(500).json({message: 'Database Error'})
    }
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
exports.updateTicket = async (req, res) => {
    let ticketId = parseInt(req.params.id)

    if (!ticketId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try{
        let ticket = await Ticket.findOne({ where: {id: ticketId}, raw: true})
        if(ticket === null){
            return res.status(404).json({ message: 'This ticket does not exist !'})
        }
        await Ticket.update(req.body, { where: {id: ticketId}})
        return res.json({ message: 'Ticket Updated'})
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }
}
exports.deleteTicket = (req, res) => {
    let ticketId = parseInt(req.params.id)
    if(!ticketId) {
        return res.status(400).json({message: 'Missing Parameter'})
    }

    Ticket.destroy({where : {id: ticketId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(() => res.status(500).json({message: 'Database Error'}))
}