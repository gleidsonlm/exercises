// Import SQLITE3 Node.JS library
const sqlite3 = require('sqlite3');
const path = require('node:path');
const users = [];
const sql = `select * from user`;

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

// 2. Query user table and append users array
const getUsers = function(callback) {
    db.each(sql,(err,row) => {
        if (err) throw (err)
        else {
            users.push(row);
        }
        return callback(false);
    })
}
// 3. Callback function

getUsers(function(err) {
    if (err) throw (err);
    return users;
})

// 4. Close database connection.
db.close ((err)=>{
    if (err) throw (err);
    console.log(users);
    console.log('Database connection is closed');
});

// 5. export function
module.exports = { getUsers };