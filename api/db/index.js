const pgp = require('pg-promise')()

// postgres://username:password@host:port/database
let connection = ''

if (process.env.NODE_ENV === 'development') {
  // connection = dev db
} else {
  // connection = production db
}

const db = pgp(connection)

module.exports = { db, connection }
