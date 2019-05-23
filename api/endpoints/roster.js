const express = require("express");
const router = express.Router();
const db = require("../db");

const stripIDs = item => {
  const { id, ...rest } = item
  return {...rest}
}

router.get("/:id?", function(req, res) {
  db.getAllWrestlers().then(response =>
    res.json({ name: "The Testerinos", roster: response.rows.map(stripIDs) })
  );
});

router.post("/update/:id?", function(req, res) {
  const dbArray = req.body;

  db.deleteWrestlersFromTable().then(result => {
    for (let i = 0; i < dbArray.length; i++) {
      const values = [
        dbArray[i].name,
        dbArray[i].dob,
        dbArray[i].weight,
        dbArray[i].win,
        dbArray[i].loss
      ];

      db.addWrestler(values).then(addResponse => {
        res.json(addResponse.rows.map(stripIDs));
      });
    }
  });
});

module.exports = router;
