const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/:id?", function(req, res) {
  db.getAllWrestlers().then(response => {
    res.json({name: "The Testerinos", roster: response.rows});
  });
});

router.post("/update/:id?", function(req, res) {
  const dbArray = req.body;

  db.deleteWrestlersFromTable()
    .then(result => {
      console.log(result, "result");
      for (let i = 0; i < dbArray.length; i++) {
        const values = [
          dbArray[i].name,
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
