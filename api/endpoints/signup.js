const express = require("express");
const router = express.Router();
const db = require("../db");
const emailValidator = "email-validator";
const bcrypt = "bcrypt";

function validUser(user) {
  const validEmail = true; //emailValidator.validate(user.email)
  const validPassword =
    typeof user[1] == "string" && user[1].trim() != "" && user[1].trim() >= 6;
  if (validEmail && validPassword) {
    console.log("validuser is true");
    return true;
  } else {
    return false;
  }
}

router.post("/addCoach", (req, res) => {
  const { email, password } = req.body;
  const values = [email, email, password];

  console.log("\n", `received POST: ${JSON.stringify(req.body)}`);
  console.log(`querying database with values: ${JSON.stringify(values)}`);

  db.addCoach(values)
    .then(query => {
      console.log(query);
      bcrypt.hash(password, 10, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash);
        res.json(query);
      });
    })
    .catch(err => {
      console.error(err.stack, "\n");
      res.json(err);
    });
});

module.exports = router;
