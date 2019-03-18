const express     = require('express')
const endpoints   = require('./endpoints')
const middleware  = require('../middleware')

const app = express()
const port = process.env.PORT || 5000

app.use(middleware)
app.use('/api', endpoints)

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})
