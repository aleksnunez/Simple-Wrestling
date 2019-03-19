const pgp = require('pg-promise')()
const Sequelize = require('sequelize');
const defineDataSets = require('./defineData');
const addData = require('./addData');
const configAWS = require('../config/awsConfig')

let database = () =>{
  
  const sequelize = new Sequelize(configAWS.databaseName,configAWS.masterUserName,configAWS.password,{
    host: 'wrestlingtournments.chgoxg8wubk2.us-west-2.rds.amazonaws.com',
    dialect: 'postgres'
  });

  sequelize.authenticate().then(() => {
    console.log(" Database is running Success!");
  }).catch((err) => {
    console.log(err);
  });
  defineDataSets(sequelize);
  addData();
};

module.exports = database; 