const express= require('express')
const app = express();

const port = process.env.PORT || 5000;
const database = require('./db');
const endpoints = require('./endpoints');

<<<<<<< HEAD
database.database()
console.log("Love Me Hard!");


=======

database.database();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
>>>>>>> 46d61f99dd3e3dfab22f79c8497d2bfbba03bd95
app.use('/api',endpoints);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
