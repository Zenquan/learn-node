// const koa = require('koa2')
// const loggerAsync = require('./middleware/logger-generator')

// const app = new koa()
// const port = 3003
// app.use(loggerAsync())
// app.use((ctx)=>{
//     ctx.body = 'hello, world!'
//     console.log(ctx.status)
// })

// app.listen(port, ()=>{
//     console.log(`The server is running at ${port}`)
// })

const koa = require('koa2')
const loggerAsync = require('./middleware/logger-async')

const app = new koa()

app.use(loggerAsync())

app.use((ctx)=>{
    ctx.body = 'Hello, Koa!';
})

app.listen(3000, ()=>{
    console.log('Server is running at port 3000')
})