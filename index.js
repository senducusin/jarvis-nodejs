const express = require('express')
const app = express()

const stocksRoutes = require('./routes/stocks')
const topNewsRoutes = require('./routes/topNews')
const pizzaRoutes = require('./routes/pizza')


app.use(express.json())

app.get('/', (req, res) => {
    console.log(`Request from ${req.ip}`)
    res.redirect("https://senducusin-portfolio.herokuapp.com/")
})

app.use(stocksRoutes);
app.use(topNewsRoutes);
app.use(pizzaRoutes);


// Uses set port else custom (3000)
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))