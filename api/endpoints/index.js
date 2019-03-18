const express = require('express')
const router  = express.Router()

router.get('/', (req, res) => {
  res.send({ express: 'CONNECTED TO /API' })
})

module.exports = router
