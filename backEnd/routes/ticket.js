const express = require('express')
const ticketCtrl = require('./../controllers/ticket')

let router=express.Router()


router.get('/', ticketCtrl.getAllTickets)
router.get('/:id', ticketCtrl.getTicket)

router.put('', ticketCtrl.addTicket)
router.patch('/:id', ticketCtrl.updateTicket)
router.delete('/:id', ticketCtrl.deleteTicket)

module.exports = router