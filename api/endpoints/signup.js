const express = require('express')
const router  = express.Router()
const db = require('../db')

router.post('/post', (req, res) => {
  const { email, password } = req.body
  const values = [email, email, password]

  console.log(`received POST: ${JSON.stringify(req.body)}`)
  console.log(`querying database with values: ${JSON.stringify(values)}`)

  db.addCoach(values)
    .then(query => res.json(query))
    .catch(err => console.error(err.stack))
})

module.exports = router;
