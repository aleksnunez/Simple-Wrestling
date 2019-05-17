const express = require("express");
const router = express.Router();

const db = require("../db");

const passport = require("passport");
const bcrypt = require("bcrypt");

const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

router.post("/", function(req, res) {
  const { email, password } = req.body;
  if (validUser(req.body)) {
    db.searchCoach(email)
      .then(query => {
        bcrypt.compare(password, query.rows[0].password, function(err, result) {
          if (result) {
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
