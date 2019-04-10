const connect = require('./sequalize');


let testDB =()=>{
  connect.authenticate().then(() => {
    console.log(" Database connection has been established!");
  }).catch((err) => {
    console.log("Unable to successfully connect to database",err);
  });
}

module.exports = testDB;
