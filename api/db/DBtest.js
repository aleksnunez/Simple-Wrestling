const connect = require('./sequalize');


let testDB =()=>{
  connect.authenticate().then(() => {
    console.log(" Database is running and tables are made !");
  }).catch((err) => {
    console.log(err);
  });
}

module.exports = testDB;