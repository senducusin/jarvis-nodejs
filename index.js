const express = require('express')
const app = express()
const WebSocket = require("ws")

const server = require("http").createServer(app)
const wss = new WebSocket.Server({ server: server })

const stocksRoutes = require('./routes/stocks');
const topNewsRoutes = require('./routes/topNews');
const pizzaRoutes = require('./routes/pizza');
const bankRoutes = require('./routes/bank').router;
const datesRoutes = require('./routes/dates');
const creditsRoutes = require('./routes/credits');

wss.on("connection", function connection(ws) {

    console.log("A new client conencted")

    ws.send("Welcome New Client!")

    ws.on("message", function incoming(message) {
        console.log("received: %s", message)
        ws.send("Got your message: " + message)
    })
})

app.use(express.json())

app.get('/', (req, res) => {
    console.log(`Request from ${req.ip}`)
    res.redirect("https://senducusin-portfolio.herokuapp.com/")
})

app.use(stocksRoutes);
app.use(topNewsRoutes);
app.use(pizzaRoutes);
app.use(bankRoutes);
app.use(datesRoutes);
app.use(creditsRoutes);

// Uses set port else custom (3000)
const port = process.env.PORT || 3000
server.listen(port, () => console.log(`Listening on port ${port}...`))