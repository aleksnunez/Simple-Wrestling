const express = require("express");
const router = express.Router();

const db = require("../db");

<<<<<<< HEAD
const validator = "email-validator";
=======
const EmailValidator = "email-validator";
>>>>>>> 2967a354e7097b905a0ede66a6d9e79e5f7632f5
const passport = require("passport");
const bcrypt = require("bcrypt");

const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

<<<<<<< HEAD
router.get("/get", function(req, res) {
  body = {
    email: "email",
    password: "password"
  };
  res.json(body);
});

function validUser(user) {
  const validEmail = typeof user.email == "string" && user.email.trim() != "";
  const validPassword =
    typeof user.password == "string" &&
    user.password.trim() != "" &&
    user.password.trim() >= 6;

  return true;
}
router.post("/post", function(req, res) {
  if (validUser(req.body.email)) {
    console.log("hello world");
    db.searchCoach(req.body.email).then(user => {
      console.log("user", user);
    });
    //query the the database to check to see if email has been taken
    //if not taken then hashpassword
    //insert user, pw into db
    //redirect
    // bcrypt.hash(myPlaintextPassword, saltRounds).then(hash => {
    //   const user = {
    //     email: req.body.email,
    //     password: hash
    //   };
    //   res.json({
    //     success: "your user/password was successfully made"
    //   });
    // });
  } else {
    res.json({
      error: "please enter valid username and password"
    });
  }
  /*
  body.email
  body.password
   */
=======
function validUser(user) {
  const validEmail = typeof user.email == "string" && user.email.trim() != "";
  const validPassword =
    typeof user.password == "string" && user.password.trim() >= 6;
  return validEmail;
}

router.post("/", function(req, res) {
  const { email, password } = req.body;
  console.log(req.body);
  if (validUser(req.body)) {
    db.searchCoach(email)
      .then(query => {
        bcrypt.compare(password, query.rows[0].password, function(err, result) {
          console.log(result, "successful login");
          if (result) {
            console.log("successful hello ");
            res.cookie("user_id", query.rows[0].id, {
              httpOnly: true,
              signed: true,
              secure: false
            });
>>>>>>> 2967a354e7097b905a0ede66a6d9e79e5f7632f5

            res.json({
              message: "logged in "
            });
          } else {
            res.json({
              message: "invalid login"
            });
          }

          // res == true
        });
        // bcrypt.compare(req.body.password,query.rows[0].password).then(result => {
        //   const isSecure = req.app.get("env") != "development";
        //   res.cookie("user_id", user.id, {
        //     httpOnly: true,
        //     secure: isSecure,
        //     signed: true
        //   });
        //   res.json({
        //     message: "logged in"
        //   });
      })
      .catch(err => {
        console.error(err.stack, "\n error in hash");
        res.json(err);
      });
    //query to see if username is in db
    //compare password with hashed pw

    //   //setting the set-cookie header
    //   //successfully logged in
    // });
  } else {
    console.log("invalid login ");
  }
});

module.exports = router;
