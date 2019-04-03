const express = require('express');
const router  = express.Router();

router.get('/', function (req, res) {
  console.log('success');
  res.send('hello world')
  
})



module.exports = router;
