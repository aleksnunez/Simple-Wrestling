const express = require('express')
const router  = express.Router()

const home = require('./homePage')
const coachTeamRegisteration = require('./coachRegisterTeam')
const login = require('./login')
const signup = require('./signup')

router.use('/home', home)
router.use('/coachTeamRegisteration',coachTeamRegisteration)
router.use('/login', login)
router.use('/signup', signup)

module.exports = router
