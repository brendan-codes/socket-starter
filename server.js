const express = require('express');
const app = express();
const sockets = require('socket.io');


const server = app.listen(9002, () => {
    console.log("Sockets on 9002")
});

// www.whatever.io
// agar.io

const io = sockets(server);


io.on("connection", socket => {

    console.log(socket.id);

    socket.on("message-from-client", (data) => {
        console.log(data);
        io.emit("update-number", {"number": data.number})
    });

    // socket.emit
    // sends to just one client

    // io.emit
    // sends to all

    // socket.broadcast
    // sends to all clients but one

});