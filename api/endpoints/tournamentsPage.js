const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", function(req, res) {
  //res = get all the tournaments

});

router.post("/search", function(req, res) {
  const { search } = req.body
  const values = [search]

  db.searchTournament(values)
    .then(query => res.json(query))
    .catch(err => {
      console.error(err.stack);
      res.json(err);
    });
});
module.exports = router;
