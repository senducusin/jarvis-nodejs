const express = require('express')
const app = express()
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

app.use(express.json())

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

router.post('/api/bank/create', (req, res) => {

    let name = req.body.name
    let accountType = req.body.accountType
    let balance = req.body.balance

    let account = {
        name: name,
        accountType: accountType,
        balance: balance
    }

    accounts.push(account)

    res.json(accounts)

    console.log(accounts)
})

module.exports = router