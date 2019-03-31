const express= require('express')
const app = express();
<<<<<<< HEAD
const port = process.env.PORT || 3000;
const database = require('./db/index');
const endpoints = require('./endpoints/index');
=======
const port = process.env.PORT || 5000;
const database = require('./db');
const endpoints = require('./endpoints');
>>>>>>> 401b8ce018ff7c5dcf35d9308ffeb1d5d928405c

//database.database();
app.use('/api',endpoints);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
