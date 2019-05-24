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

router.get("/:search", function(req, res) {
  const { search } = req.params;
  const values = [search];

  db.searchTournament(values)
    .then(query => res.json(query.rows))
    .catch(err => {
      console.error(err.stack);
      res.json(err);
    });
});

module.exports = router;
