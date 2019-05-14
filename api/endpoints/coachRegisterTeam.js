const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/getWrestlerInformation", function(req, res) {
  res.json(body);
});

router.post("/addWrestler", function(req, res) {
  const { user_name, dob, weight, team } = req.body;
  const values = [user_name, dob, weight, team];
  console.log(values);
  db.addWrestler(values)
    .then(query => {
      console.log(success);
      res.json(query);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
