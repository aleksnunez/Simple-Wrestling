const { Pool } = require('pg')
const configAws = require('../config/awsConfig');
const pgp  = require('pg-promise');

const testConnect = ()=>{

  const pool = new Pool({
    user: configAws.masterUserName,
    host: configAws.host,
    database: configAws.databaseName,
    password: configAws.password,
    port: configAws.port
   });
   const db = pgp(configAws.host);

   const CREATE_TABLE_LOGIN = 'CREATE TABLE coach(id SERIAL PRIMARY KEY, email VARCHAR(40) NOT NULL, password VARCHAR(40) NOT NULL';
   const test = "CREATE TABLE users(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL";
   let testConnection =()=>{
    pool.connect().then(client => {
      client.query('SELECT * ').then(res => {
        client.release()
        console.log('hello from', res.rows[0].name)
      })
      .catch(e => {
        client.release()
        console.error('query error', e.message, e.stack)
      })
    })
   }
   let createLoginTableTest = ()=>{
      pool.query("CREATE TABLE coach(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL)",(err,res)=>{
        console.log(res);
        pool.end();
      })
    }
    let testQuery =()=>{
      db.query(`SELECT * FROM coaches;`).then((res)=>{
        console.log(res);
      });
    }

    // let testInsert =()=>{
    //   db.any(`INSERT INTO coaches VALUES (1,'david', 'emails', 'passwords');`,(err,res)=>{
    //     console.log(res);
    //   }).catch(err)=>{
    //     console.log(err);
    //   };
    // }

    testQuery();
     //testInsert();
    // testInsert();
    //  createLoginTableTest();
    // createLoginTableTest();
}

module.exports = testConnect;
