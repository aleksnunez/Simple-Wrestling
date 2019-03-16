const Sequelize = require('sequelize');
const db = new Sequelize('api','postgres','',{
  host:'localhost',
  dialect:'postgres',
  operatorsAliases: false,

  pool:{
    max: 5, 
    min: 0, 
    acquire: 30000,
    idleL: 10000
  }
});

db.authenticate()
  .then(()=>{
    'Database connected'
  })
  .catch((erro)=>console.log('error'))