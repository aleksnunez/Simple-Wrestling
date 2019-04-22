const express = require('express')
const router  = express.Router()
const db = require('../db')

router.post('/addCoach', (req, res) => {
  const { email, password } = req.body
  const values = [email, email, password]

  console.log('\n', `received POST: ${JSON.stringify(req.body)}`)
  console.log(`querying database with values: ${JSON.stringify(values)}`)

  db.addCoach(values)
    .then(query => {
      console.log(`sending response: ${JSON.stringify(query)}`, '\n')
      res.json(query)
    })
    .catch(err => {
      console.error(err.stack, '\n')
      res.json(err)
    })
})

module.exports = router
