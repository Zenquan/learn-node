// const koa = require('koa2')
// const convert = require('koa-convert')
// const loggerGenerator = require('./middleware/logger-generator')

// const app = new koa()
// const port = 3002
// app.use(convert(loggerGenerator))
// app.use((ctx)=>{
//     ctx.body = 'hello, world!'
//     console.log(ctx.status)
// })

// app.listen(port, ()=>{
//     console.log(`The server is running at ${port}`)
// })

const koa = require('koa2')
const convert = require('koa-convert')
const loggerGenerator = require('./middleware/logger-generator')
const app = new koa()

app.use(convert(loggerGenerator))
app.use((ctx)=>{
    ctx.body = 'Hello, koa!';
})

app.listen(3000, ()=>{
    console.log('Server is running at port 3000');
})