const DB = require('../_utils/db.config')
const Project = DB.Project

exports.getAllProjects = (req, res) => {
    Project.findAll()
        .then( projects => res.json({data: projects}))
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Database Error'})
        })
}
exports.getProject = async (req, res) => {
    let projectId = parseInt(req.params.id)

    if(!projectId) {
        return res.status(400).json({message: 'Missing Parameter'})
    }

    try{
        let project = await Project.findOne({ where: {id: projectId}})
        if (project === null){
            return res.status(404).json({message: 'Project does not exist'})
        }
        return res.json({data: project})
    } catch{
        return res.status(500).json({message: 'Database Error'})
    }
}

exports.addProject = async (req, res) => {
    if (!req.body.name){
        return res.status(400).json({message: 'Missing Data'})
    }
    try {
        let project = await Project.create(req.body)
        return res.json({message: 'Project Created', data: project})
    } catch (err){
        console.log(err)
        return res.status(500).json({message: 'Database Error'})
    }
}
exports.updateProject = async (req, res) => {
    let projectId = parseInt(req.params.id)

    if (!projectId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try{
        let project = await Project.findOne({ where: {id: projectId}, raw: true})
        if(project === null){
            return res.status(404).json({ message: 'This Project does not exist !'})
        }
        await Project.update(req.body, { where: {id: projectId}})
        return res.json({ message: 'project Updated'})
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }
}
exports.deleteProject = (req, res) => {
    let projectId = parseInt(req.params.id)
    if(!projectId) {
        return res.status(400).json({message: 'Missing Parameter'})
    }

    Project.destroy({where : {id: projectId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(() => res.status(500).json({message: 'Database Error'}))
}