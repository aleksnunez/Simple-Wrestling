const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", function(req, res) {
  db.getTournaments()
    .then(query => res.json(query.rows))
    .catch(err => {
      console.error(err.stack);
      res.json(err);
    });
});

router.get("/:search/", function(req, res) {
  const { search } = req.params;
  const values = [search];

  db.searchTournament(values)
    .then(query => res.json(query.rows))
    .catch(err => {
      console.error(err.stack);
      res.json(err);
    });
});

router.post("/createTournament", function(req, res) {
  const { tournament_name, location, admin_id } = req.body;
  const values = [tournament_name, location, admin_id];

  db.createTournament(values)
    .then(query => {
      console.log(query);
      res.json(query);
    })
    .catch(err => {
      console.log(err.stack);
      res.json(err);
    });
});

module.exports = router;
