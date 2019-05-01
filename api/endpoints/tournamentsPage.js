const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", function(req, res) {
  //res = get all the tournaments

});

router.post("/$id",function(req,res){
  //req search string
  //res (searched) =>  tournaments
});
module.exports = router;
