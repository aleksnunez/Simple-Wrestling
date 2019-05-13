const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", function(req, res) {
  //res = get all the tournaments

});

router.post("/$name", function(req,res) {
  const { name } = req.params
  db.searchTournament(name)
    .then(query => res.json(query))
    .catch(err => {
      console.error(err.stack);
      res.json(err);
    });
});
module.exports = router;
