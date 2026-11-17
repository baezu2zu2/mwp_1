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

app.listen(PORT, ()=>{
    console.log(`Server is Running on port ${PORT}`)
})