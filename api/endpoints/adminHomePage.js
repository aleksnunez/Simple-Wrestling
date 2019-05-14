const express = require('express');
const router  = express.Router();

router.get('/getAdminHomePage', function (req, res) {
  let body ={
    TournamentName:'joe',
    Location:'SFSU wrestling club',
    WrestlingStyle:'San Francisco State University',
    DateStart:'04/04/19',
    DateEnd: '04/05/19',
    TournamentFlier: '',
    NumberOfWrestlers: 10,
    Notes:'this is a note'
  }
  res.json(body);
})

router.post('/postAdminHomePage', function (req,res){
  let body ={
    TournamentName:'joe ',
    Location:'SFSU wrestling club',
    WrestlingStyle:'San Francisco State University',
    DateStart:'04/04/19',
    DateEnd: '04/05/19',
    TournamentFlier: '',
    NumberOfWrestlers: 10,
    Notes:'this is a note'
  }
  res.json(body);
})

module.exports = router;
