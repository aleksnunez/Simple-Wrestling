const express = require('express');
const port = process.env.PORT || 5000;


let app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port,()=>{
  console.log(`server is up on port ${port}`);
});