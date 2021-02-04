const express = require('express')
const app = express()

app.use(express.json())

var orders = []

app.get('/', (req,res) => {
    res.redirect("https://senducusin.github.io/portfolio/")
})

app.get('/api/pizza/orders', (req,res) => {
    res.send(orders)
})

app.get('/api/pizza/orders/:id', (req,res) => {
    const orderId = req.params.id - 1

    console.log(`${orderId} - ${orders.length - 1}: ${orderId <= (orders.length - 1)}`)

    if (orderId > (orders.length - 1) || (orderId < 0)) {
        res.status(404).send("That order ID is not found")
    }else{
        res.send(orders[orderId])
    }
})

app.post('/api/pizza/order',(req,res) => {
    const body = req.body

    if(
        body.hasOwnProperty("name") === true && 
        body.hasOwnProperty("size") === true &&
        body.hasOwnProperty("type") === true &&
        body.hasOwnProperty("email") === true
        ){
            orders.push(body)
            res.send({"status":"OK"})
    }else{
        res.status(400).send("Invalid Request")
    }
    
})

// Uses set port else custom (3000)
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening on port ${port}...`))