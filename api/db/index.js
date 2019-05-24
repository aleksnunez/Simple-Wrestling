const queries = require("./queries");
const pgp = require("pg-promise")();
const Pool = require("pg").Pool;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD
});
// const pool = pgp(pg);

const addCoach = values => pool.query(queries.CREATE_COACH, values);

const searchCoach = values =>
  pool.query(queries.SEARCH_FOR_UNIQUE_COACH_EMAIL, values);

const searchTournament = values =>
  pool.query(queries.SEARCH_FOR_TOURNAMENT_ID, values);

const getAllTournaments = () => pool.query(queries.SELECT_ALL_TOURNAMENTS);

const addTournament = values =>
  pool.query(queries.CREATE_TOURNAMENT, values);

const getAllWrestlers = () => pool.query(queries.SELECT_ALL_WRESTLERS);

const addWrestler = values => pool.query(queries.CREATE_WRESTLER, values);

const searchForWrestler = values =>
  pool.query(queries.SEARCH_FOR_EXISTING_WRESTLER, [values[5]]);

const updateWrestlers = values =>
  pool.query(query.UPDATE_EXISTING_WRESTLER, values);

const deleteWrestlersFromTable = () => pool.query(queries.DELETE_ALL_WRESTLERS);

const deleteTournamentsFromTable = () => pool.query(queries.DELETE_ALL_TOURNAMENTS);

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

module.exports = {
  addCoach,
  addAdmin,
  addWrestler,
  deleteWrestlersFromTable,
  deleteTournamentsFromTable,
  getAllWrestlers,
  deleteCoach,
  deleteAdmin,
  searchCoach,
  searchTournament,
  addTournament,
  getAllTournaments,
  searchForWrestler,
  updateWrestlers
};
