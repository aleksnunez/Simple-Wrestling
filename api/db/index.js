const queries = require("./queries");

const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "wrestlingUsername",
//   host: "wrestlingidentifier.chgoxg8wubk2.us-west-2.rds.amazonaws.com",
//   database: "WrestlingDatabaseName",
//   password: "wrestle123",
//   port: 5432
// });
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})


const addCoach = values => pool.query(queries.CREATE_COACH, values);

// need to tweak the rest of the query functions below

const addAdmin = (request, response) => {
  pool.query(
    queries.CREATE_ADMIN,
    [admin_name, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const addWrestler = (request, response) => {
  pool.query(
    queries.CREATE_WRESTLER,
    [user_name, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const deleteCoach = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(REMOVE_COACH_BY_ID, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const deleteAdmin = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(REMOVE_ADMIN_BY_ID, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const deleteWrestler = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(REMOVE_WRESTLER_BY_ID, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const getOnebyEmai = item => {
  const email = item.email;
  console.log(email);
  return DB("user")
    .where("email", email)
    .first();
};

module.exports = {
  addCoach,
  addAdmin,
  addWrestler,
  deleteCoach,
  deleteAdmin,
  deleteWrestler
};
