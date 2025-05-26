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



const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index)
    res.send(`so... you're interested in the ${collectibles[index].name}? it's yours! for the low price of ${collectibles[index].price}`)
  })

app.listen(3000, () => {
    console.log('reporting from port 3000')
})