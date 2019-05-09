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
    typeof user.password == "string" && user.password.trim() >= 6;
  return validEmail;
}

router.post("/", function(req, res) {
  const { email, password } = req.body;
  const values = [email, email, password];
  if (validUser(req.body)) {
    db.searchCoach(email)
      .then(query => {
        bcrypt.compare(password, query.rows[0].password, function(err, res) {
          console.log(res);
          if (res) {
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
