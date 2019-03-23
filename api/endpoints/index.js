const express = require('express');
const router  = express.Router();

const home = require('./homePage')
const coachTeamRegisteration = require('./coachRegisterTeam')


router.use('/home',home);
router.use('/coachTeamRegisteration',coachTeamRegisteration);

module.exports = router;