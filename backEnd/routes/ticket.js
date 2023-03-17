const express = require('express')

let router=express.Router()


router.get('/', (req, res) => res.send(`and the tickets list`))
router.get('/:id', (req, res) => res.send(`ticket ${req.params.id}`))

module.exports = router