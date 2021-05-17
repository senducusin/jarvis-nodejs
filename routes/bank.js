const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

var accounts = [
    {
        name: 'John Doe',
        id: uuidv4(),
        accountType: 'Checking',
        balance: 800
    },
    {
        name: 'John Doe',
        id: uuidv4(),
        accountType: 'Saving',
        balance: 700
    }
]

router.get('/api/bank/accounts', (req, res) => {
    res.json(accounts)
})

module.exports = router