const express= require('express')
const app = express();
const port = process.env.PORT || 3000;
const database = require('./db');
const endpoints = require('./endpoints/index');

database.database();
app.use('/api',endpoints);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

