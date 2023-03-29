const express = require('express')
const cors = require('cors')
let DB = require('./_utils/db.config')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const ticket_router = require('./routes/ticket')
const status_router = require('./routes/statuses')
const severity_router = require('./routes/severities')

app.use('/tickets', ticket_router)
app.use('/statuses', status_router)
app.use('/severities', severity_router)

app.get('/', (req, res) => res.send('Hello World'))
app.get('*', (req, res) => res.status(404).send(`Are you lost somewhere ?`))

DB.sequelize.authenticate()
    .then( () => console.log('DB Connection OK'))
    .catch( (err) => console.log('Database Error', err))


app.listen(process.env.SERVER_PORT, () => console.log(`Example app listening on port ${process.env.SERVER_PORT}`))
