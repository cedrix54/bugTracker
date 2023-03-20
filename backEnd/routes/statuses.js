const express = require('express')
const statusCtrl = require('../controllers/status')

let router=express.Router()


router.get('/', statusCtrl.getAllStatuses)

module.exports = router