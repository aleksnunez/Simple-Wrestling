const express = require("express");
const router = express.Router();

const db = require("../db");

const passport = require("passport-local");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

router.post("/", function(req, res) {
  const { email, password } = req.body;

  passport.use(
    new LocalStrategy(
      db
        .searchCoach([email])
        .then(query => {
          bcrypt.compare(password, query.rows[0].password, function(
            err,
            result
          ) {
            if (result) {
              return done(null, email);
            } else {
              res.status(400).json({ error: "error" });
            }
          });
        })
        .catch(err => {
          res.status(404).json("error");
        })
    )
  );
});

module.exports = router;
