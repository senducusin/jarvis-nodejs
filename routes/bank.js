
const express = require('express')
const app = express()
const router = express.Router()
const { v4: uuidv4, NIL } = require('uuid');
const Account = require("../account")

app.use(express.json())

let johnDoeChecking = new Account('John Doe', uuidv4(), 'checking', 800.00)
let johnDoeSaving = new Account('John Doe', uuidv4(), 'saving', 700.00)

let accounts = [
    johnDoeChecking,
    johnDoeSaving
]

router.get('/api/bank/accounts', (req, res) => {
    res.json(accounts)
})

router.post('/api/bank/create', (req, res) => {

    let id = req.body.id
    let name = req.body.name
    let accountType = req.body.accountType
    let balance = req.body.balance

    let account = new Account(id, name, accountType, balance)

    account.save(accounts, (newAccount, error) => {
        if (newAccount) {
            accounts.push(newAccount)
            res.json({
                status: true,
                message: " "
            })
        } else {
            res.json({
                status: false,
                message: error
            })
        }
    })
})

module.exports = {
    router: router,
    accounts: accounts
}