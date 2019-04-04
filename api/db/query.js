const connect = require('./sequalize');

let queryUserName = ()=>{
  connect.query("SELECT * FROM Admin",{type:connect.QueryTypes.SELECT}).then(results => {
    console.log('query',results);
  });
}
let queryfindOne =  ()=>{
  connect.findOne({
    where: {username: 'admin'},
  }).then(results => {
    console.log(results);
  })
}
let queryFindAll= ()=>{
  connect.findAll({
    where: {
      username: 'admin'
    }
  });
}

module.exports = {
  queryUserName,
  queryfindOne,
  queryFindAll
};
