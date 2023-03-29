const DB = require('../_utils/db.config')
const User = DB.User

exports.getAllUsers = (req, res) => {
    User.findAll({attributes: ['id', 'login', 'firstName', 'lastName']})
        .then( users => res.json({data: users}))
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Database Error'})
        })
}

exports.addUser = async (req, res) => {
    const {login, firstName, lastName} = req.body
    if (!login || !firstName || !lastName){
        return res.status(400).json({message: 'Missing Data'})
    }
    try {
        let user = await User.create(req.body)
        return res.json({message: 'User Created', data: user})
    } catch (err){
        console.log(err)
        return res.status(500).json({message: 'Database Error'})
    }
}