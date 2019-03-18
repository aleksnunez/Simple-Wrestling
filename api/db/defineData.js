const Sequelize = require('sequelize');

let DefineData = (sequelize)=>{
  wrestler = sequelize.define('wrestler',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    weightClass: Sequelize.INTEGER

  });
  teams = sequelize.define('teams',{ 
     name: Sequelize.STRING,
     coach: Sequelize.STRING,
     wrestlers:Sequelize.STRING,
     location:Sequelize.STRING,
  })

};


module.exports = DefineData;