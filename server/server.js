const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const database = require('./database/database');

// console.log that your server is up and running


database();
// create a GET route
app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
