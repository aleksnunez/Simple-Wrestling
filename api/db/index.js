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
}

module.exports.database = database;
