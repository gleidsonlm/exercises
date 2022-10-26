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

// Routes base path

// Routes whoami
let whoami = "unknown"
app.get('/whoami', (req, res) => res.send(whoami))
app.put('/whoami', (req, res) => {
    whoami = req.body.whoami
    res.send(whoami)
})

// Routes lang
let lang = []
app.get('/lang', (req, res) => res.send(lang))
app.post('/lang', (req, res) => {
    lang.push(req.body.lang)
    res.send(lang)
})
app.delete('/lang/:code', (req, res) => {
    lang = lang.filter(v => v !== req.params.code)
    res.send(lang)
})

// Routes user
let users = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@doe.com'
    },
    {
        id: '2',
        name: 'Jane Doe',
        email: 'jane@doe.com'
    }
]
// Return all users
app.get('/users',(req,res) => {
    res.send(users)
})
// Return user by id in the url param.
app.get('/users/:user',(req,res) => {
    res.send(users.find( item => item.id === String(req.params.user)))
})
// Add user
app.post('/users',(req,res) => {
    users.push(req.body)
    res.send(users)
})
// Delete user
app.delete('/users/:user',(req,res) => {
    users = users.filter(item => item.id!== String(req.params.user))
    res.send(users)
})

/* Query Params */
app.get('/person',(req,res) => {
    // res.send(req.query)
    res.send(users.find( item => item.id === String(req.query.id)))
})

// Return other API object with axios.
app.get('/github', (req, res) => {
    // res.send(req.query.user)
    axios.get(`https://api.github.com/users/${req.query.user}`)
    .then(result => res.send(result.data))
    .catch(error => console.log(error))
})