const express = require("express");
const router = express.Router();

const db = require("../db");

const EmailValidator = "email-validator";
const passport = require("passport");
const bcrypt = require("bcrypt");

const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

router.get("/get", function(req, res) {
  body = {
    username: "user",
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

  return validEmail && validPassword;
}
router.post("/post", function(req, res) {
  console.log(req.body.email);
  if (validUser(req.body)) {
    // console.log();
    db.searchCoach(req.body.email).then(user => {
      console.log("user", user);
    });
    // //query the the database to check to see if email has been taken
    // //if not taken then hashpassword
    // //insert user, pw into db
    // //redirect
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

  res.json(req.body);
});

router.post("/login", function(req, res) {
  if (validUser(req.body)) {
    //query to see if username is in db
    //compare password with hashed pw
    bcrypt.compare(req.body.password, user.password).then(result => {
      const isSecure = req.app.get("env") != "development";
      res.cookie("user_id", user.id, {
        httpOnly: true,
        secure: isSecure,
        signed: true
      });
      res.json({
        message: "logged in"
      });
      //setting the set-cookie header
      //successfully logged in
    });
  } else {
    console.log("invalid login ");
  }
});

module.exports = router;
