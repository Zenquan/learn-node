const express = require('express')
const utility = require('utility')

var app = new express()
var hostname = '127.0.0.1'
var port = 3003

app.get('/', (req, res)=>{
    // res.send('hello world');
    var q = req.query.q;
    // console.log(q);
    // res.send(q);
    res.send(utility.md5(q))
})
app.listen(port, hostname, ()=>{
    console.log(`Server is running at ${port}`)
})