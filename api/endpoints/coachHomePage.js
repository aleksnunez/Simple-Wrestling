const express = require('express');
const router  = express.Router();

router.get('/getCoachHomePage', function (req, res) {
  //coach register team
  let body ={
    WrestlerName:'joe',
    Organization:'SFSU wrestling club',
    School:'San Francisco State University'
  }
  res.json(body);
})

router.post('/postCoachHomePage', function (req,res){
  let body ={
    WrestlerName:'joe ',
    Organization:'SFSU wrestling club',
    School:'San Francisco State University',
    WeightClass:'125',
    RecordWins: 5,
    RecordLost: 10,
    TournamentsCloseBy: ['SFSU Wrestling', 'College Tournaments']
  }
  res.json(body);
})

module.exports = router;
