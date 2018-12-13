const express = require('express');
const socket = require('socket.io');

let app = express();
let server = app.listen('4000', () => {
    console.log('Server is running just fine at port 4000');
})

// static files
app.use(express.static('public'))

// Socket connection
let io = socket(server);
io.on('connection', (socket) => {
    console.log('connected to socket at http://localhost:4000 with id ', socket.id);
    /**
     * get emitted data 
     */

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    })
})