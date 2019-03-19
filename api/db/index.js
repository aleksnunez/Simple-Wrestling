const Sequelize = require('sequelize');
const awsKeys = require('../config/awsConfig')

let database = () =>{
  const sequelize = new Sequelize(awsKeys.databaseName, awsKeys.masterUserName, awsKeys.password, {
    host: 'wrestlingtournments.chgoxg8wubk2.us-west-2.rds.amazonaws.com',
    dialect: 'postgres'
  });
  
  sequelize.authenticate().then(() => {
    console.log(" Database is running Success!");
  }).catch((err) => {
    console.log(err);
  });

  User = sequelize.define('wrestler',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    weightClass: Sequelize.INTEGER

  });

  User.sync()
  .then(() => User.create({
    username: 'janedoe',
    password: 'password',
    age: 25,
    weightclass: 125 
  }))
  .then(userTest => {
    console.log(userTest.toJSON());
  });


};

module.exports = database; 