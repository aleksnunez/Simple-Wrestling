const express = require('express');
const router  = express.Router();



router.get('/getWrestlerInformation', function (req, res) {
  //coach register team
  let body ={
    WrestlerName:'joe',
    Organization:'SFSU wrestling club',
    School:'San Francisco State University'
  }
  res.json(body);
})

router.get('/getWrestlerInformations', function (req,res){
  const {hellos, world} = req.query;
  console.log(hello);

  let body = {
    WrestlerName:['joe','james'],
    Organization:'SFSU wrestling club',
    School:'San Francisco State University'
  }
  //console.log(res);

  console.log(`this is the request ${req}`);
  res.json(body);

})

module.exports = router;
