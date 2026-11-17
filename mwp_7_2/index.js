const express = require("express");

const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.get('/', (req, res) => {
    res.status(200)
    res.send("Hello, Node")
})

app.get('/users', (req, res) => {
    res.status(200)
    res.send("Get all users")
})

app.post('/users', (req, res) => {
    res.status(200)
    res.send("Create new user")
})

app.get('/users/:id', (req, res) => {
    const userID = req.params.id
    res.status(200)
    res.send(`Get user with id: ${userID}`)
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)
})

app.put('/users/:id', (req, res) => {
    const userID = req.params.id
    res.status(200)
    res.send(`Update user with id: ${userID}`)
})

app.delete('/users/:id', (req, res) => {
    const userID = req.params.id
    res.status(200)
    res.send(`Delete user with id: ${userID}`)
})

app.listen(PORT, ()=>{
    console.log(`Server is Running on port ${PORT}`)
})