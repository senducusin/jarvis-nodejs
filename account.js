
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
}

module.exports = Account