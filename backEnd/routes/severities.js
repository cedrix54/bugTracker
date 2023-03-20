const express = require('express')
const severityCtrl = require('./../controllers/severity')

let router=express.Router()


router.get('/', severityCtrl.getAllSeverities)

module.exports = router