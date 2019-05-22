const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/getWrestlerInformation", function(req, res) {
  res.json("hello world");
});

router.post("/addWrestler", function(req, res) {
  const { user_name, dob, weight, win, lost } = req.body;
  console.log(req.body.dob);
  const values = [user_name, dob, weight, win, lost];
  db.addWrestler(values)
    .then(query => {
      console.log("at the querys ");
      res.json(query);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
