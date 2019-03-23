const Sequelize = require('sequelize');
const sequelize = require('./sequalize');
const addData = require('./addData');

let database = () =>{

  User = sequelize.define('wrestler',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    weightClass: Sequelize.INTEGER
  });

  addData();
};

module.exports.database = database; 