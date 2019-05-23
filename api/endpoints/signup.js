const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

router.post("/addCoach", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const values = [name, email, password];

  const insertCoach = (err, hash) => {
    values[2] = hash;
    db.addCoach(values)
      .then(query => res.json(query))
      .catch(err =>
        res.status(500).json({ error: err, details: "insert-coach error"})
      );
  }

  const coachExists = query => query.rows.length === 0

  db.searchCoach([values[1]])
    .then(query => {
      coachExists(query)
        ? bcrypt.hash(password, 10, insertCoach)
        : res.status(400).json({ error: err, details: "account exists"});
    })
    .catch(err => res.status(500).json({ error: err, details: "hash error"}));
});

module.exports = router;
