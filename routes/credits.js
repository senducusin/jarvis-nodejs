const express = require('express');
const router = express.Router();

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

router.get('/api/credit-score/:userId', (req, res) => {
    const score = randomIntFromInterval(600, 850)
    res.json({score: score})
})

module.exports = router