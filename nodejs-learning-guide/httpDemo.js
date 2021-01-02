const http = require('http')

let server = http.createServer(() => {
  console.log('app is running>>>');
})

// server.on("listening", () => {
//   console.log('111>>>');
// })

// server.on("connection", (socket) => {
//   socket.on('a', () => {
//     console.log('222>>>', 222);
//   })
//   console.log('111>>>');
// })

// server.on("connection", (socket) => {
//   socket.emit('a')
//   console.log('111>>>');
// })

server.listen(3200)