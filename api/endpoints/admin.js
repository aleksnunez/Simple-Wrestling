const express = require("express");
const router = express.Router();
const db = require("../db");

const stripIDs = item => {
  const { id, ...rest } = item
  return {...rest}
}

router.get("/:id?", function(req, res) {
  db.getAllTournaments().then(response =>
    res.json({ name: "Northern California", tournaments: response.rows.map(stripIDs) })
  )
    .catch(err => console.error(err.stack))
});

router.post("/update/:id?", function(req, res) {
  const dbArray = req.body;

  db.deleteTournamentsFromTable().then(result => {
    for (let i = 0; i < dbArray.length; i++) {
      const values = [
        dbArray[i].tournament_name,
        dbArray[i].location,
        dbArray[i].picture,
        dbArray[i].background
      ];

      db.addTournament(values).then(addResponse => {
        res.json(addResponse.rows.map(stripIDs));
      })
        .catch(err => console.error(err.stack))
    }
  })
    .catch(err => console.error(err.stack))
});

module.exports = router;
