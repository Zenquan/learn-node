// const koa = require('koa2')
// const fs = require('fs')
// const Router = require('koa-router')

// const app = new koa()
// const home = new Router()

// home.get('/', async (ctx) => {
//     let html = `
//             <ul>
//                 <li> <a href = "/page/hello"> /page/hello </a></li>
//                 <li> <a href = "/page/404"> /page/404 </a></li>
//             </ul>
//     `
//     ctx.body = html
// })

// let page = new Router()
// page.get('/404', async (ctx)=>{
//     ctx.body = '404 page!'
// }).get('/hello', async(ctx)=>{
//     ctx.body = 'hello page!'
// })

// let router = new Router()
// router.use('/', home.routes(), home.allowedMethods())
// router.use('/page', page.routes(), page.allowedMethods())

// app.use(router.routes()).use(router.allowedMethods())

// app.listen(4000, () => {
//     console.log('Server is running at port 4000')
// })

const koa = require('koa2')
const Router = require('koa-router')

const app = new koa()
let home = new Router()

home.get('/', (ctx)=>{
    let html = `
        <ul>
            <li><a href="page/hello">/page/hello</a></li>
            <li><a href="page/404">/page/404</a></li>
        </ul>
    `
    ctx.body = html
})

let page = new Router()
page.get('/404', (ctx)=>{
    ctx.body = '404 page!'
})
page.get('/hello', (ctx)=>{
    ctx.body = 'hello page!'
})

let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

app.use(router.routes()).use(router.allowedMethods());
app.listen(4001, ()=>{
    console.log('Server is running at port 4001')
})