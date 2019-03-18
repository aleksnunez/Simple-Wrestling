const Sequelize = require('sequelize');
const defineDataSets = require('./defineData');

let database = () =>{
  const sequelize = new Sequelize('wrestlingdatabase', 'WrestlingApplication', 'wrestle123', {
    host: 'wrestlingtournments.chgoxg8wubk2.us-west-2.rds.amazonaws.com',
    dialect: 'postgres'
  });

  sequelize.authenticate().then(() => {
    console.log(" Database is running Success!");
  }).catch((err) => {
    console.log(err);
  });
  
  defineDataSets();


  sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    password: 'password'
  }))
  .then(userTest => {
    console.log(userTest.toJSON());
  });

};

module.exports = database; 