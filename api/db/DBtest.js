const sequelize = require('./sequalize');


let testDB =()=>{
  sequelize.authenticate().then(() => {
    console.log(" Database is running Success!");
  }).catch((err) => {
    console.log(err);
  });
}

module.exports = testDB;