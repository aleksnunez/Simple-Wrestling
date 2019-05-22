const express = require("express");
const router = express.Router();

router.get("/getHostPage", function(req, res) {
  let body = {
    TournamentName: "joe",
    Location: "SFSU wrestling club",
    WrestlingStyle: "San Francisco State University",
    DateStart: "04/04/19",
    DateEnd: "04/05/19",
    TournamentFlier: "",
    NumberOfWrestlers: 10,
    Notes: "this is a note"
  };
  res.json(body);
});

router.post("/postHostPage", function(req, res) {
  let body = {
    TournamentName: "joe ",
    DateStart: "04/04/19",
    Level: " ",
    WrestlingStyle: "San Francisco State University",
    Location: "SFSU wrestling club",
    TournamentFlier: "",
    TournamentLogos: "",
    NumberOfGyms: 10,
    NumberOfMats: 10
  };
  res.json(body);
});

module.exports = router;
