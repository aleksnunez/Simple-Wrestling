const express = require('express');
const router  = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy

const userObject = { 
  username: 'testing objects',
  passwordHash: 'encrypting the password',
  id: 1
}

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
  passport.use(new LocalStrategy(
    (username, password, done) => {
       findUser(username, (err, user) => {
         if (err) {
           return done(err)
         }
   
         // User not found
         if (!user) {
           return done(null, false)
         }
   
         // Always use hashed passwords and fixed time comparison
         bcrypt.compare(password, user.passwordHash, (err, isValid) => {
           if (err) {
             return done(err)
           }
           if (!isValid) {
             return done(null, false)
           }
           return done(null, user)
         })
       })
     }
   ))
   

  });
  /*
  body.email
  body.password
   */

  res.json(req.body);

});

module.exports = router;
