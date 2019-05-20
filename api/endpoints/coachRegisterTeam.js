const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/getWrestlerInformation", function(req, res) {
  res.json("hello world");
});

router.post("/updateTeamroster", function(req, res) {
  const dbArray = req.body;
  values = [user_name, dob, weight, win, lost, id];
  db.deleteWrestlersFromTable().then(() => {
    res.json("delete was a success");
  });
});

module.exports = router;
