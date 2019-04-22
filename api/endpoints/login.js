const express = require('express');
const router  = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const session = require('express-session');

router.get('/get', function (req, res) {
  body ={
    username:'user',
    password: 'password'
  }
  res.json(body);
});
router.post('/post', function(req,res){
  //console.log(`received POST: ${JSON.stringify(req.body)}`)
  const data = JSON.stringify(req.body);
  console.log(req.body.email);
  
  /*
  body.email
  body.password
   */

  res.json(req.body);

});

module.exports = router;
