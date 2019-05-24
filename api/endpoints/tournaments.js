const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", function(req, res) {
  db.getAllTournaments()
    .then(query => res.json(query.rows))
    .catch(err => {
      console.error(err.stack);
      res.json(err);
    });
});

router.get("/:id", function(req, res) {
  const { id } = req.params;
  const values = [id];

  db.searchTournament(values)
    .then(query => {
      res.json(query.rows[0])
    })
    .catch(err => {
      console.error(err.stack);
      res.json(err);
    });
});

module.exports = router;
