const express = require('express');
const router  = express.Router();

router.get('/get', function (req, res) {
  body ={
    username:'user',
    password: 'password'
  }
  res.json(body);
});
router.post('/post', function(req,res){
  //console.log(`received POST: ${JSON.stringify(req.body)}`)
  const data = JSON.stringify(req.body);
  console.log(req.body.email);
  
  res.json(req.body);
  


  /*
  body.email
  body.password
   */
});

module.exports = router;
