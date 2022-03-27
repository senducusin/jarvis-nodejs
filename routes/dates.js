const express = require('express');
const router = express.Router();

router.get('/api/dates/current-date', (req, res) => {
    res.json({date: Date()})
})

module.exports = router;