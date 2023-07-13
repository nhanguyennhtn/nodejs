const express = require('express')
const conectDB = require('./config')
const routes = require('./routes')
const app = express()

const PORT = 6868
app.use(express.json())

routes(app)

conectDB()
app.get('/', (req, res) => {return res.json('Hello world')})

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))