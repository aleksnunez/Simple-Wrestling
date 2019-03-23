let post = require('./sequalize');

console.log(post);
let loginData = ()=>{
  post.sync()
  .then(() => User.create({
    username: 'james',
    password: 'password'
    
  }))
  .then(userTest => {
    console.log(userTest.toJSON());
  });
}

module.exports= loginData;