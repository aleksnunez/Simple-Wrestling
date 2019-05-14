const express = require("express");
const router = express.Router();

const db = require("../db");

const validator = "email-validator";
const EmailValidator = "email-validator";
const passport = require("passport");
const bcrypt = require("bcrypt");

const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

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
          console.log("bcrypt compare result", result);
          if (result) {
            console.log("successful hello ");
            res.cookie("user_id", query.rows[0].id, {
              httpOnly: true,
              signed: true,
              secure: false
            });
            res.json({
              message: "logged in "
            });
          } else {
            res.json({
              message: "invalid login"
            });
          }
        });
      })
      .catch(err => {
        console.error(err.stack, "\n error in hash");
        res.json(err);
      });
  } else {
    console.log("invalid login ");
  }
});

module.exports = router;
