const connect = require('./sequalize');

let addCoach = ()=>{
  connect.sync()
    .then(() => Coach.create({
      username: 'coach',
      password: 'password'
    }))
    .then(userTest => {
      console.log(userTest.toJSON());
    });
}

let addAdmin = ()=>{
  connect.sync()
    .then(() => Admin.create({
      username: 'admin',
      password: 'password'
    }))
    .then(userTest => {
      console.log(userTest.toJSON());
    });
}

let addWrestler = ()=>{
  connect.sync()
    .then(() => User.create({
      usercame: 'hello',
      password: 'password'
    }))
    .then(userTest => {
      console.log(userTest.toJSON());
    });
}

module.exports = {
  addAdmin,
  addCoach,
  addWrestler
};

/*
export this file to make db calls 
*/