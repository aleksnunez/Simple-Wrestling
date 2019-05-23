const express = require("express");
const router = express.Router();
const db = require("../db");

const passport = require("passport-local");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const session = require("express-session");

router.post("/", function(req, res) {
  const { email, password } = req.body;

  const handleAuthResults = (err, result) => {
    if (result) {
      const user = jwt.sign({email}, process.env.APP_SECRET);
      res.json(user);
    } else {
      res.status(400).json({ error: err, details: "failed auth-check" });
    }
  }

  db.searchCoach([email])
    .then(query => {
      bcrypt.compare(password, query.rows[0].password, handleAuthResults);
    })
    .catch(err => {
      res.status(404).json({ details: "generic error" });
    });
});

module.exports = router;
