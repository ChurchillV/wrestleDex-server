const Pool = require('pg').Pool;

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'wrestledex',
    password : 'Introvert10',
    port : 5432,
})

module.exports = { pool };