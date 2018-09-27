// const koa = require('koa2')

// const app = new koa()
// app.use(async (ctx)=>{
//     if(ctx.url==='/index') {
//         ctx.cookies.set(
//             'cid',
//             'hello',
//             {
//                 domain: 'localhost',
//                 path: '/index',
//                 maxAge: 10*60*1000,
//                 expires: new Date('2018-10-20'),
//                 httpOnly: false,
//                 overwrite: false
//             }
//         )
//         ctx.body = 'cookie is ok'
//     }else{
//         ctx.body = 'hello world'
//     }
// })

// app.listen(3001, ()=>{
//     console.log('Server is running at 300')
// })


const koa = require('koa2')

const app = new koa()

app.use(async ctx=>{
    if(ctx.url==='/index'){
        ctx.cookies.set(
            'cid',
            'hello zenquan',
            {
                domain: 'localhost',
                path: '/index',
                expires: new Date('2018-10-20'),
                maxAge: 10*60*1000,
                httpOnly: false,
                overwrite: false
            }
        )
        ctx.body = 'cookie is ok'
    }else {
        ctx.body = 'hello world'
    }
})
app.listen(3002, ()=>{
    console.log('Server is running at 3002')
})