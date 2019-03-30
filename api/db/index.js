const Sequelize = require('sequelize');
const connection = require('./sequalize');
const DBtest = require('./DBtest');
const query = require('./query');
const add = require('./addData');

let database = () =>{
  User = connection.define('user',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    weightClass: Sequelize.INTEGER
  });
  Admin = connection.define('admin',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    weightClass: Sequelize.INTEGER
  });

  Coach = connection.define('coach',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    weightClass: Sequelize.INTEGER
  });
  DBtest();
}

module.exports.database = database; 