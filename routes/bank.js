
const express = require('express')
const app = express()
const router = express.Router()
const { v4: uuidv4, NIL } = require('uuid');
const Account = require("../account")

app.use(express.json())

let johnDoeChecking = new Account("65c0be51-9f3d-4cdb-8d7b-1618ba0474df", 'John Doe', 'checking', 800.00)
let johnDoeSaving = new Account("bbe17900-ebcf-4b61-9620-55b5c08e6681", 'John Doe', 'saving', 700.00)

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
                status: true
            })

        } else {

            res.json({
                status: false,
                message: error
            })

        }
    })
})

router.post("/api/bank/transfer", (req, res) => {
    let accountFromId = req.body.accountFromId
    let accountToId = req.body.accountToId
    let amount = req.body.amount

    let fromAccount = accounts.find(account => account.id == accountFromId)
    let toAccount = accounts.find(account => account.id == accountToId)

    console.log(req.body)

    fromAccount.transfer(toAccount, amount, (transferred, error) => {
        if (transferred) {
            res.json({ status: true })
        } else {
            res.json({ status: false, message: error })
        }
    })
})

module.exports = {
    router: router,
    accounts: accounts
}