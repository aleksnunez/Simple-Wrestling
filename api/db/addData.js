const sequalize = require('./sequalize');

let addCoach = ()=>{
  sequalize.sync()
    .then(() => Coach.create({
      username: 'coach',
      password: 'password'
    }))
    .then(userTest => {
      console.log(userTest.toJSON());
    });
}

let addAdmin = ()=>{
  sequalize.sync()
    .then(() => Admin.create({
      username: 'admin',
      password: 'password'
    }))
    .then(userTest => {
      console.log(userTest.toJSON());
    });
}

let addWrestler = ()=>{
  sequalize.sync()
    .then(() => User.create({
      username: 'hello',
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