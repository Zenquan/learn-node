const net = require('net')

let server = net.createServer(socket => {
  socket.on('data', (data) => {
    console.log('data>>>', data);
    socket.write(`data from you is ${data}`)
  })

  socket.on('close', function () {
    console.log('>>>', `${socket.remoteAddress}${socket.remotePort}`);
  })
})

const port = 3500, 
  hostname = '127.0.0.1'

server.listen(port, hostname)