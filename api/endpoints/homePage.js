const express = require('express');
const router  = express.Router();

router.get('/', function (req, res){

  let carouselArrayMain = ['https://s3.amazonaws.com/sidearm.sites/hawkeyesports.com/images/2018/3/20/180317NCAA0898.JPG',
  'https://www.gannett-cdn.com/presto/2019/03/01/PPYR/aad7e9f0-52ed-436d-8ce0-8966ad9b0a95-USATSI_10715652.jpg?crop=4203,2353,x0,y0&width=3200&height=1680&fit=bounds']

  let carouselArraySub = ['https://s3.amazonaws.com/sidearm.sites/hawkeyesports.com/images/2018/3/20/180317NCAA0898.JPG',
  'https://www.gannett-cdn.com/presto/2019/03/01/PPYR/aad7e9f0-52ed-436d-8ce0-8966ad9b0a95-USATSI_10715652.jpg?crop=4203,2353,x0,y0&width=3200&height=1680&fit=bounds']

  let tournamentCard =[
    {
      tournamentCardID: 1,
      image:'https://www.usawmembership.com/images/usa_wrestling_v.png',
      title:'Zinicin Classic',
      dateDay:2,
      dateMonth: 4,
      dateyear: 2019,
    }
  ]

  let body = {
     mainCarousel:carouselArrayMain,
     tournamentCard: tournamentCard,
     carouselArraySub: carouselArraySub
  }
  res.json(body)
})




module.exports = router;
