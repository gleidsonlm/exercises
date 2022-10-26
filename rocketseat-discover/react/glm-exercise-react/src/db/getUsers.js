// Import SQLITE3 Node.JS library
const sqlite3 = require('sqlite3');
const path = require('node:path');


// 1. Connect to sqlite3 database file /db/exercise.db;
const db = new sqlite3.Database(
    path.resolve(__dirname,'exercise.db'),
    sqlite3.OPEN_READONLY,
    err => {
    if (err) {
        console.error(err.message);
    }
    console.log('Database connection is open');
    });  

// 2. Query user table and return all results;
let sql = `select * from user`;
db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
    console.log(row);
    });
});

db.close ((err)=>{
    if (err) {
        console.error(err.message);
    }
    console.log('Database connections close');
});