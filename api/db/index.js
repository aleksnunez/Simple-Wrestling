const Sequelize = require('sequelize');
const awsKeys = require('../config/awsConfig')


/*const connection = require('./sequalize');
const DBtest = require('./DBtest');
const query = require('./query');
const add = require('./addData');*/



let database = (searchTerm) =>{
  const sequelize = new Sequelize(awsKeys.databaseName, awsKeys.masterUserName, awsKeys.password, {
    host: 'wrestlingtournments.chgoxg8wubk2.us-west-2.rds.amazonaws.com',
    dialect: 'postgres',
  });

  sequelize
  .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  const model = Sequelize.Model

  class Wrestler extends model {}
  Wrestler.init({
    // attributes
    userName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    school: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  }, {
    sequelize,
    modelName: 'wrestler'
    // options
  });

  Wrestler.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return Wrestler.create({
      userName: 'Mike',
      school: 'SFSU'
    });
  });

  //
  // model.findAll({
  //   where: {
  //     userName: searchTerm
  //   }
  // });

  /*Wrestler.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, userName, school));
  });*/
  /*User = connection.define('user',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    weightClass: Sequelize.INTEGER
  });
=======

>>>>>>> 46d61f99dd3e3dfab22f79c8497d2bfbba03bd95

let database = () =>{

<<<<<<< HEAD
  Coach = connection.define('coach',{
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    weightClass: Sequelize.INTEGER
  });
  add.addCoach();
  query.queryFindAll().then((admin)=>{
    console.log(admin);
  });*/


}

module.exports.database = database;
