const express = require('express')
const app = express()

app.use(express.json())

var orders = []

let stocks = [
    {
        "symbol":"GOOG",
        "description":"Google Innovation Media",
        "price":1080,
        "change":"-0.24"
    },
    {
        "symbol":"MSFT",
        "description":"Microsoft Coorperation",
        "price":60,
        "change":"+3.45"
    },{
        "symbol":"FB",
        "description":"Facebook Social Media",
        "price":220,
        "change":"-1.56"
    },
    {
        "symbol":"AMAZON",
        "description":"Amazon Everything Store",
        "price":400,
        "change":"+6.56"
    }
]

let topNews = [
    {
        "title":"PayPal is shutting down domestic payments business in India",
        "author":"Manish Singh",
        "imageURL":"https://techcrunch.com/wp-content/uploads/2021/02/GettyImages-1184251295.jpg?w=600"
    },
    {
        "title":"Kia Is Preparing to Build Apple Cars in the U.S.",
        "author":"Tim Higgins",
        "imageUrl": "https://images.wsj.net/im-295437/social"
    }
] 

app.get('/', (req,res) => {
    console.log(`Request from ${req.ip}`)
    res.redirect("https://senducusin.github.io/portfolio/")
})

app.get('/api/stocks', (req,res) => {
    console.log(`Request from ${req.ip}`)
    res.send(stocks)
})

app.get('/api/top-news',(req,res) => {
    console.log(`Request from ${req.ip}`)
    res.send(topNews)
})

app.get('/api/pizza/orders', (req,res) => {
    console.log(`Request from ${req.ip}`)
    res.send(orders)
})

app.get('/api/pizza/orders/:id', (req,res) => {
    const orderId = req.params.id - 1

    console.log(`Request from ${req.ip}`)

    if (orderId > (orders.length - 1) || (orderId < 0)) {
        res.status(404).send("That order ID is not found")
    }else{
        res.send(orders[orderId])
    }
})

app.post('/api/pizza/order',(req,res) => {
    const body = req.body

    console.log(`Request from ${req.ip}`)

    if(
        body.hasOwnProperty("name") === true && 
        body.hasOwnProperty("size") === true &&
        body.hasOwnProperty("type") === true &&
        body.hasOwnProperty("email") === true
        ){
            orders.push(body)
            res.send(body)
    }else{
        res.status(400).send("Invalid Request")
    }
    
})

// Uses set port else custom (3000)
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening on port ${port}...`))