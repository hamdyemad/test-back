const app = require('express')();
const server = require('http').createServer(app)
const io = require('socket.io')(server, { path: '/chat/socket.io', cors: { origin: 'http://localhost:4200' } });
const path = require('path');

io.on('connection', (socket) => {
    console.log('new user')
    socket.on('sendMsg', () => {
        console.log('message')
    })
})



server.listen(3000, console.log('server listend at 3000'))