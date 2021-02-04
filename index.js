const express = require('express')
const app = express()

app.get('/', (req,rest) => {
    rest.send('Hello World')
})

app.get('/api/orders', (req,res) => {
    res.send([1,2,3])
})


app.listen(3000, ()=> console.log('Listening on port 3000...'))