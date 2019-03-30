const express = require('express');
const router  = express.Router();



router.get('/', function (req, res) {
  res.json('sucessfully got data.')
})

/*
Name
Email
Password
Organizations
School / club
*/

router.post('/hello', function (req,res){
  res.send('hello world');
})

module.exports = router;
