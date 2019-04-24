const express= require('express')
const app = express();

const port = process.env.PORT || 5000;
const database = require('./db/');
const endpoints = require('./endpoints');
const passport = require('passport');



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(passport.initialize());
passport.use(passport.session());

app.use( cookieParse('secure cookeie'));
app.use('/api',endpoints);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
