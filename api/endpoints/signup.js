const express = require("express");
const router = express.Router();
const db = require("../db");
const emailValidator = "email-validator";

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
  console.log("values", values[0]);
  // db.searchCoach(values[0])
  //   .then(query => {
  //     console.log("query data");
  //     console.log(`${query}`);
  //     if (!query) {
  //       console.log(`this is the result of the query ${query}`);
  //     }
  //   })
  //   .catch(err => {
  //     console.error(err.stack, "\n");
  //     res.json(err);
  //   });
  db.addCoach(values)
    .then(query => {
      // console.log(`sending response: ${JSON.stringify(query)}`, "\n");
      console.log(query, "success");
      res.json(query);
    })
    .catch(err => {
      // console.error(err.stack, "\n");
      console.log("key already exist ");
      res.json(err);
    });
});

router.post("/", function(req, res) {
  const { email, password } = req.body;
  const values = [email, password];
  console.log(req.body.email);
  if (true) {
    console.log("valid user his email is " + req.body);
    db.searchCoach(values)
      .then(query => {
        console.log(`results of the query sending response: ${query}`, "\n");
        res.json(query);
      })
      .catch(err => {
        console.log(err.stack);
        res.json(err);
      });
  } else {
    res.json("sorry please enter in a valid username and password");
  }
});

module.exports = router;
