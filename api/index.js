const express= require('express')
const app = express();

const port = process.env.PORT || 5000;
const database = require('./db');
const endpoints = require('./endpoints');
const passport = require('passport');

database();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(passport.session({
  store: new RedisStore({
    url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
passport.use(passport.session())

app.use('/api',endpoints);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
