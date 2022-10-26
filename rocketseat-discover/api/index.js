// Requires Express
const express = require('express');
const app = express();
const axios = require('axios');
const sqlite3 = require('sqlite3');
const path = require('node:path');

// Express listen on port 3000
app.listen(3000, () => {
  console.log('listening on port 3000')
})

// Middleware - Using Express JSON
app.use(express.json())

// Connect to sqlite3 database file /db/exercise.db;
const db = new sqlite3.Database(
    path.resolve(__dirname,'./db/exercise.db'),
    sqlite3.OPEN_READONLY,
    err => { if (err) { console.error(err.message); }
    console.log('Database connection is open');
    });  

/*
    API methods for Class Management.
    - Data is stored in the database sqlite3 "/db/exercise.db".
    - Methods will be:
        - /user/ // Returns all Users 
        - /user/:id // Returns a specific User
        - /context/ // Returns all Contexts
        - /context/:id // Returns a specific Context (eg. Class)
        - /role/ // Returns all Roles
        - /role/:id // Returns a specific Role
        - /course/ // Returns all Courses
        - /course/:id // Returns a specific Course
        - /enrol/ // Returns all Enrolments
        - /enrol/:id // Returns a specific Enrolment
        - /class/ // Returns all Classes
        - /class/:id // Returns a specific Class
    - Enhancement request: later add queries params to "Returns all" methods.
*/

// /user/ // Returns all Users 
// /user/:id // Returns a specific User
const getUsers = function () {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM user';
        db.each(
            sql,
            (err, rows) => {
                if (err) return reject(err)
                return resolve(JSON.stringify(rows))
            })
    })
    .finally(
        db.close(
            function (err) {
                if (err) throw (err);
                console.log('Database connection closed');
                }) 
             )
}

app.get('/users',(req,res) => {
    res.send(getUsers())
})