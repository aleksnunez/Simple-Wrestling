const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", function(req, res) {
  //res = get all the tournaments
});

router.get("/:search/", function(req, res) {
  const { search } = req.params;
  const values = [search];
  console.log(req.params);
  db.searchTournament(values)
    .then(query => res.json(query))
    .catch(err => {
      console.error(err.stack);
      res.json(err);
    });
});
module.exports = router;
