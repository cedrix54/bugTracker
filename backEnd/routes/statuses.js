const express = require('express')
const statusCtrl = require('../controllers/status')

let router=express.Router()


router.get('/', statusCtrl.getAllStatuses)
router.put('/', statusCtrl.addStatuses)

module.exports = router