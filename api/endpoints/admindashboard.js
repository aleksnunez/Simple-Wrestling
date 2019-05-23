const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/dashboard", function(req, res) {
  const { name, location, picture, background } = req.body;
  const values = [name, location, picture, background, 1];
  db.getTournaments()
    .then(tournaments => {
      res.json(tournaments);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});
module.exports = router;
