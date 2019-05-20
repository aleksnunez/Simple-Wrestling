const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/getWrestlerInformation", function(req, res) {
  res.json("hello world");
});

router.post("/updateTeamroster", function(req, res) {
  const dbArray = req.body;
  console.log("hello world ");
  // values = [user_name, dob, weight, win, lost, id];
  db.deleteWrestlersFromTable().then(result => {
    console.log(result, "result");

    res.json("delete was a success");
  });
});

module.exports = router;
