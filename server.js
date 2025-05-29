const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("workin :)")
})
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


let shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  app.get("/shoes", (req, res) => {
   const minPrice = parseInt(req.query['min-price'])
   const maxPrice = parseInt(req.query['max-price'])
   const selectType = req.query.type;
    if(maxPrice) {
      shoes = shoes.filter((shoe) => (shoe.price < maxPrice || shoe.price === maxPrice ))
    }
     if(minPrice) {
      shoes = shoes.filter((shoe) => (shoe.price > minPrice || shoe.price === minPrice))
    }
    if(selectType) {
      shoes = shoes.filter((shoe) => shoe.type === selectType)
    }
    res.send({shoes})
  })

app.listen(3000, () => {
    console.log('reporting from port 3000')
})