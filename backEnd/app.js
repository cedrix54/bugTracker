const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const port = 8888


const ticket_router = require('./routes/ticket')


app.use('/tickets', ticket_router)


app.get('/', (req, res) => res.send('Hello World'))
app.get('*', (req, res) => res.status(404).send(`Are you lost somewhere ?`))

app.listen(port, () => console.log(`Example app listening on port ${port}`))