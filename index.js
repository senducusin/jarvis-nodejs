const express = require('express')
const app = express()

var orders = [
    {
        "name":"Hawaiian Delight",
        "size":"Large"
    },{
        "name":"Classic Cheese",
        "size":"Party"
    }
]

app.get('/', (req,rest) => {
    rest.send('Hello World!')
})

app.get('/api/orders', (req,res) => {
    res.send(orders)
})

app.get('/api/orders/:id', (req,res) => {
    const orderId = req.params.id - 1

    console.log(`${orderId} - ${orders.length - 1}: ${orderId <= (orders.length - 1)}`)

    if (orderId > (orders.length - 1) || (orderId < 0)) {
        res.status(404).send("That order ID is not found")
    }else{
        res.send(orders[orderId])
    }
})

// Uses set port else custom (3000)
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening on port ${port}...`))