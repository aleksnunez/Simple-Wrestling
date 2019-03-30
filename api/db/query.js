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
    // project will be the first entry of the Projects table with the title 'aProject' || null
    // project.get('title') will contain the name of the project
  })
}

module.exports = {
  queryUserName,
  queryfindOne
};