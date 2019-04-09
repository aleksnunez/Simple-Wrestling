const Sequelize = require('sequelize');
const connection = require('./sequalize');
const DBtest = require('./DBtest');
const query = require('./query');
const add = require('./addData');



let database = () =>{
  const model = connection.Model;
  class db extends model{};
  model.init({
    User = connection.define('user',{
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weightClass: Sequelize.INTEGER
    })

    Admin = connection.define('admin',{
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weightClass: Sequelize.INTEGER
    })

    Coach = connection.define('coach',{
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weightClass: Sequelize.INTEGER
    })
  });
  add.addCoach();

  query.queryFindAll().then((admin)=>{
    console.log(admin);
  });
}

module.exports.database = database;
