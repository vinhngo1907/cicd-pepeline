const express = require("express");
const app = express();
const http = require("http").createServer(app);
const delay = require("delay");
const io = require("socket.io")(http);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("New connection", socket.id);
    socket.on('on-chat', (data) => {
        console.log(data);
        io.emit('user-chat', data)
    });
});

const port = 3000;
http.listen(port, function() {
    console.log("Server started on port " + port);
});

async function broadcastBitcoinPrice() {
    while (true) {
        const price = Math.random() * 400;
        io.emit("bitcoin-price", {
            price: parseFloat(price.toFixed(2))
        });
        await delay(400);
    }
}

broadcastBitcoinPrice();