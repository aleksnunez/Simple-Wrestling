const express = require("express");
const router = express.Router();
const db = require("../db");

const stripIDs = item => {
  const { admin_id, id, ...rest } = item;
  return {...rest};
}

router.get("/:id?", function(req, res) {
  db.getAllTournaments()
    .then(response => {
      const tournaments = response.rows.map(stripIDs);
      const body = { name: "Northern California", tournaments: tournaments };
      res.json(body);
    })
    .catch(err => console.error(err.stack));
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

      db.addTournament(values)
        .catch(err => console.error(err.stack));
    }
  })
    .catch(err => console.error(err.stack));
});

module.exports = router;
