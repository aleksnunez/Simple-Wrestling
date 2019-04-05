const Sequelize = require('sequelize');
const awsKeys = require('../config/awsConfig')

let sequelize = ()=>{
  const sequelizeInit = new Sequelize(awsKeys.databaseName, awsKeys.masterUserName, awsKeys.password, {
    host: 'wrestlingtournments.chgoxg8wubk2.us-west-2.rds.amazonaws.com',
    dialect: 'postgres'
  });
}


module.exports = sequelize;
