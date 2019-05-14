const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

router.post("/addCoach", (req, res) => {
  const { name, email, password } = req.body;
  const values = [name, email, password];
  db.searchCoach(email)
    .then(query => {
      if (query.rows.length === 0) {
        bcrypt.hash(password, 10, function(err, hash) {
          values[2] = hash;
          db.addCoach(values)
            .then(query => {
              console.log("successful", query);
              res.json(query);
            })
            .catch(err => {
              console.error(err.stack, "\n error in insert");
              res.json(err);
            });
        });
      }
    })
    .catch(err => {
      console.error(err.stack, "\n error in hash");
      res.json(err);
    });
});

module.exports = router;
