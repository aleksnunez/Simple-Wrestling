const express = require("express");
const router = express.Router();

const db = require("../db");

const EmailValidator = "email-validator";
const passport = require("passport");
const bcrypt = require("bcrypt");

const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

function validUser(user) {
  const validEmail = typeof user.email == "string" && user.email.trim() != "";
  const validPassword =
    typeof user.password == "string" &&
    user.password.trim() != "" &&
    user.password.trim() >= 6;

  return validEmail && validPassword;
}

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
