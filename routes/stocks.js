const express = require('express');
const router = express.Router();

let stocks = [
    {
        "symbol": "GOOG",
        "description": "Google Innovation Media",
        "price": 1080,
        "change": "-0.24"
    },
    {
        "symbol": "MSFT",
        "description": "Microsoft Coorperation",
        "price": 60,
        "change": "+3.45"
    }, {
        "symbol": "FB",
        "description": "Facebook Social Media",
        "price": 220,
        "change": "-1.56"
    },
    {
        "symbol": "AMAZON",
        "description": "Amazon Everything Store",
        "price": 400,
        "change": "+6.56"
    }
]

router.get('/api/stocks', (req, res) => {
    console.log(`Request from ${req.ip}`)
    res.send(stocks)
})

module.exports = router;