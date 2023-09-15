const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  database: "stoictodo",
  port: 5432,
});

module.exports = pool;
