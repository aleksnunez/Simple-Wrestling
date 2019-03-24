const express= require('express')
const app = express();
const port = process.env.PORT || 5000;
const database = require('./db');
const endpoints = require('./endpoints');

database.database();
app.use('/api',endpoints);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
