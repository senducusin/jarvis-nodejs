const express = require('express');
const router = express.Router();

let topNews = [
    {
        "title": "PayPal is shutting down domestic payments business in India",
        "imageUrl": "https://techcrunch.com/wp-content/uploads/2021/02/GettyImages-1184251295.jpg?w=600",
        "author": "Manish Singh"
    },
    {
        "title": "Kia Is Preparing to Build Apple Cars in the U.S.",
        "imageUrl": "https://images.wsj.net/im-295437/social",
        "author": "Tim Higgins"
    }
]

router.get('/api/top-news', (req, res) => {
    console.log(`Request from ${req.ip}`)
    res.send(topNews)
})

module.exports = router;