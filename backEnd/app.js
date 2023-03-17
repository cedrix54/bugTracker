const express = require('express')
const cors = require('cors')
const { Sequelize } = require('sequelize');

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const ticket_router = require('./routes/ticket')


app.use('/tickets', ticket_router)


app.get('/', (req, res) => res.send('Hello World'))
app.get('*', (req, res) => res.status(404).send(`Are you lost somewhere ?`))




let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
}
)

sequelize.authenticate()
    .then( () => console.log('DB Connection OK'))
    .catch( (err) => console.log('Database Error', err))


app.listen(process.env.SERVER_PORT, () => console.log(`Example app listening on port ${process.env.SERVER_PORT}`))
