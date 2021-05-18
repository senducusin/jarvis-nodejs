
const { v4: uuidv4, NIL } = require('uuid');

class Account {
    constructor(id, name, accountType, balance) {
        this.id = (id == null) ? uuidv4() : id
        this.name = name
        this.accountType = accountType
        this.balance = balance
    }

    save(accounts, completion) {
        // check if the user already has the same type of account
        const account = this.getAccountByNameAndType(this.name, this.accountType, accounts)
        if (!account) {
            completion(this)
        } else {
            completion(null, 'User already exists!')
        }
    }

    getAccountByNameAndType(name, type, accounts) {

        return accounts.find(account => account.name == name && account.accountType == type)
    }

    transfer(toAccount, amount, completion) {
        if ((this.balance - amount) < 0) {
            completion(false, "Insufficient funds!")
            return
        }

        this.withdraw(amount)
        toAccount.deposit(amount)
        completion(true)
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        this.balance -= amount
    }
}

module.exports = Account