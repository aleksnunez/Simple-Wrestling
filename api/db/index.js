const Sequelize = require('sequelize');
const sequelize = require('./sequalize');
const add = require('./addData');
const DBtest = require('./DBtest');

let database = () =>{
  User = sequelize.define('user',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    weightClass: Sequelize.INTEGER
  });
  Admin = sequelize.define('admin',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    weightClass: Sequelize.INTEGER
  });

  Coach = sequelize.define('coach',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    weightClass: Sequelize.INTEGER
  });

  DBtest();
  add.addWrestler();
  add.addAdmin();
  add.addCoach();

};

module.exports.database = database; 