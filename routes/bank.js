const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

var accounts = [
    {
        name: 'John Doe',
        id: uuidv4(),
        accountType: 'checking',
        balance: 800.00
    },
    {
        name: 'John Doe',
        id: uuidv4(),
        accountType: 'saving',
        balance: 700.00
    }
]

router.get('/api/bank/accounts', (req, res) => {
    res.json(accounts)
})

module.exports = router