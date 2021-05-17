
const express = require('express');
const router = express.Router();

var orders = []

router.get('/api/pizza/orders', (req, res) => {
    console.log(`Request from ${req.ip}`)
    res.send(orders)
})

router.get('/api/pizza/orders/:id', (req, res) => {
    const orderId = req.params.id - 1

    console.log(`Request from ${req.ip}`)

    if (orderId > (orders.length - 1) || (orderId < 0)) {
        res.status(404).send("That order ID is not found")
    } else {
        res.send(orders[orderId])
    }
})

router.post('/api/pizza/order', (req, res) => {
    const body = req.body

    console.log(`Request from ${req.ip}`)

    if (
        body.hasOwnProperty("name") === true &&
        body.hasOwnProperty("size") === true &&
        body.hasOwnProperty("type") === true &&
        body.hasOwnProperty("email") === true
    ) {
        orders.push(body)
        res.send(body)
    } else {
        res.status(400).send("Invalid Request")
    }

})

module.exports = router;