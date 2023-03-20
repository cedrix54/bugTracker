const express = require('express')
const ticketCtrl = require('./../controllers/ticket')

let router=express.Router()


router.get('/', ticketCtrl.getAllTickets)
router.get('/:id', ticketCtrl.getTicket)

router.put('', ticketCtrl.addTicket)

module.exports = router