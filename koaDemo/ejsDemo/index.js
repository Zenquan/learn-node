const koa = require('koa2')
const views = require('koa-views')
const path = require('path')

const app = new koa()
let port = 3013
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))
app.use(async ctx=>{
    let title = 'hello world'
    await ctx.render('index', {
        title,
    })
})
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})
