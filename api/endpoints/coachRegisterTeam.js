const express = require('express');
const router  = express.Router();



router.get('/', function (req, res) {

  res.json('hello world')
})

router.post('/hello', function (req,res){
  res.send('hello world');
})


/*
coaches can register a team
 request
  - get get data from endpoint to store to database
  - post names of wrestlers to display
*/
module.exports = router;
