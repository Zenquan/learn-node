const cluster = require('cluster'),
  cpsNums = require('os').cpus().length,
  http = require('http');

if (cluster.isMaster) {
  for(let i=0;i<cpsNums;i++) {
    cluster.fork()
    console.log('>>>', i);
  }
} else {
  http.createServer((req, res) => {
    res.end(`response for worker ${process.pid}`)
  }).listen(4000)

  console.log('>>>', `Worker ${process.pid} started`);
}