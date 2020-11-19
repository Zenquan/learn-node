const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer((req, res) => {
    console.log(res.statusCode);
    console.log(res);
    fs.writeFile('res.txt', res, 'utf8', (err)=>{
        console.log(err);
    })
    res.setHeader('Content-type', 'text/plain');
    res.end('hello, world!\n');
})

server.listen(port, hostname, () => {
    console.log(`Server is running in ${port}`);
})
