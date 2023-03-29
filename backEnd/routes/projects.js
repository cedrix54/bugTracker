const express = require('express')
const projectCtrl = require('./../controllers/project')

let router=express.Router()


router.get('/', projectCtrl.getAllProjects)
router.get('/:id', projectCtrl.getProject)

router.put('', projectCtrl.addProject)
router.patch('/:id', projectCtrl.updateProject)
router.delete('/:id', projectCtrl.deleteProject)

module.exports = router