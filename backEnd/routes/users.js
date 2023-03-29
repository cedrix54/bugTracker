const express = require('express')
const userCtrl = require('./../controllers/user')

let router=express.Router()


router.get('/', userCtrl.getAllUsers)
// router.get('/:id', projectCtrl.getProject)

 router.put('', userCtrl.addUser)
// router.patch('/:id', projectCtrl.updateProject)
// router.delete('/:id', projectCtrl.deleteProject)

module.exports = router