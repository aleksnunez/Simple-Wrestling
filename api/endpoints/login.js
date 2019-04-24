const express = require('express');
const router  = express.Router();

const db = require('../db/queries');

const validator = ('validator/');
const EmailValidator = ('email-validator');
const passport = require('passport');
const bcrypt = require('bcrypt');

const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy

router.get('/get', function (req, res) {
  body ={
    username:'user',
    password: 'password'
  }
  res.json(body);
});

function validUser(user){
  const validEmail =( typeof user.email == 'string') && (user.email.trim() != '');
  const validPassword = (typeof user.password == 'string') && (user.password.trim() !='') && (user.password.trim() >= 6);

  return validEmail && validPassword;
}
router.post('/post', function(req,res){
  console.log(typeof req.body.email);
  if(validUser(req.body)){
    
    res.json({
      success: 'your user/password was successfully made'
    })
  }else{
      
  }
  /*
  body.email
  body.password
   */

  res.json(req.body);

});

module.exports = router;
