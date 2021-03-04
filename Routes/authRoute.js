const express = require('express')
//const { register, login } = require('../controller/userController')
const app = express.Router()

app.get('/register', (req, res) => { 
    res.send('ini register page')
})

app.get('/login', (req, res) => { 
    res.send('ini login page')
})

// app.post('/register', async (req, res) => {
//     const { username, email, password, role } = req.body
//     const result = await register(username, email, password, role)
//     res.send(result)
// })

// app.post('/login', async (req, res) => {
//     const { username, password } = req.body
//     const result = await login(username, password)
//     res.send(result)
// })

module.exports = app