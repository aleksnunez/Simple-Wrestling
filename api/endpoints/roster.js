const express = require("express");
const router = express.Router();
const db = require("../db");

const stripIDs = item => {
  const { id, ...rest } = item;
  return {...rest};
}

router.get("/:id?", function(req, res) {
  db.getAllWrestlers().then(response => {
    const roster = response.rows.map(stripIDs);
    const body = { name: "Dylan's Superteam", roster: roster };
    res.json(body);
  })
    .catch(err => console.error(err.stack));
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

      db.addWrestler(values)
        .catch(err => console.error(err.stack));
    }
  })
    .catch(err => console.error(err.stack));
});

module.exports = router;
