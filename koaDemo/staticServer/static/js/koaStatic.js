const koa = require('koa2')
const static = require('koa-static')
const path = require('path')

var app = new koa()
var hostname = '127.0.0.1'
var port = 3000
var staticPath = './satic'

app.use(static(
    path.join(__dirname, staticPath)
))
app.use(async (ctx)=>{
    ctx.body = 'hello koa!'
})
app.listen(port, hostname, ()=>{
    console.log(`Server is running at ${port}`)
})