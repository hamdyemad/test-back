const app = require('express')();
const server = require('http').createServer(app)
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('new user')
    socket.on('sendMsg', () => {
        console.log('message')
    })
})



server.listen(3000, console.log('server listend at 3000'))