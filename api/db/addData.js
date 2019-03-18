const Sequelize = require('sequelize');

let loginData = (data)=>{
  sequelize.sync()
  .then(() => User.create({
    username: data.user,
    password: data.password
  }))
  .then(userTest => {
    console.log(userTest.toJSON());
  });
}

let addData = (tableName,data)=>{
  if(tableName=='loginTable'){
    loginData(data);
  }
}

module.exports= addData;