const Sequelize = require('sequelize');
const defineDataSets = require('./defineData');
const addData = require('./addData');

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
  
  defineDataSets(sequelize);
  addData()
};

module.exports = database; 