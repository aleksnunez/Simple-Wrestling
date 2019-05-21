const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", function(req, res) {
  db.getAllWrestlers().then(response => {
    res.json(response);
  });
});

router.post("/updateTeamroster", function(req, res) {
  const dbArray = req.body;
  console.log("hello world ");
  console.log(dbArray);
  console.log(dbArray[0].user_name, "username");

  db.deleteWrestlersFromTable().then(result => {
    console.log(result, "result");
    for (let i = 0; i < dbArray.length; i++) {
      const values = [
        dbArray[i].user_name,
        dbArray[i].dob,
        dbArray[i].weight,
        dbArray[i].win,
        dbArray[i].lost
      ];
      console.log(values, "values");
      db.addWrestler(values).then(addResponse => {
        res.json(addResponse);
      });
    }
  });
});

module.exports = router;
