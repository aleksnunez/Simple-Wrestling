const express = require('express');
const router  = express.Router();

const home = require('./homePage')
const coachTeamRegisteration = require('./coachRegisterTeam')
const login = require('./login')

router.use('/home',home);
router.use('/login',login);

router.use('/coachTeamRegisteration',coachTeamRegisteration);

module.exports = router;
