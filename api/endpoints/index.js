const express = require("express");
const router = express.Router();

const home = require("./homePage");
const roster = require("./roster");
const login = require("./login");
const signup = require("./signup");
const tournaments = require("./tournamentsPage");
const admin = require("./admin");

router.use("/home", home);
router.use("/roster", roster);
router.use("/login", login);
router.use("/signup", signup);
router.use("/tournaments", tournaments);
router.use("/admin", admin);

module.exports = router;
