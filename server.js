const express = require('express')
const app = express()


app.get('/greetings/:username', (req, res) => {
    res.send(`<h1>Welcome, ${req.params.username}! Nice to have you again.`)
})

app.get('/roll/:number', (req, res) => {
    const min = 1;
    const max = parseInt(req.params.number)
    const rolledDice = Math.floor(Math.random() * (max) + min)
    res.send(`You rolled a ${rolledDice}`)
})



app.listen(3000, () => {
    console.log('reporting from port 3000')
})