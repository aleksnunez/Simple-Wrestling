let post = require('./sequalize');

let addCoach = ()=>{
  post.sync()
    .then(() => Coach.create({
      username: 'james',
      password: 'password'
    }))
    .then(userTest => {
      console.log(userTest.toJSON());
    });
}

let addAdmin = ()=>{
  post.sync()
    .then(() => Admin.create({
      username: 'james',
      password: 'password'
    }))
    .then(userTest => {
      console.log(userTest.toJSON());
    });
}

let addWrestler = ()=>{
  post.sync()
    .then(() => User.create({
      name: 'wrestler',
      password: 'password'
    }))
    .then(userTest => {
      console.log(userTest.toJSON());
    });
}

module.exports= {
  addAdmin,
  addCoach,
  addWrestler
};