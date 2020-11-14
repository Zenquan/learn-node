const http = require('http'),
  fs = require('fs'),
  zlib = require('zlib'),
  html = './zlibServer.html'


let server = http.createServer((req, res) => {
  let accetEncode = req.headers['accept-encoding']
  if (accetEncode.includes('gzip')) {
    let zlibZip = zlib.createGzip()

    res.writeHead(200, {
      'Content-Encoding': 'gzip'
    })

    fs.createReadStream(html).pipe(zlibZip).pipe(res)
  } else {
    fs.createReadStream(html).pipe(res)
  }
})

server.listen(4000)