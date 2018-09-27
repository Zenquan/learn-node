// const koa = require('koa2')
// const session = require('koa-session-minimal')
// const mysqlSession = require('koa-mysql-session')

// const app = new koa()
// const port = 3003
// // 配置存储session信息的mysql
// let store = new mysqlSession({
//     user: 'root',
//     password: '123456',
//     database: 'koa_demo',
//     host: 'localhost'
// })
// let cookie = {
//     maxAge: '',
//     expires: '',
//     path: '',
//     domain: '',
//     httpOnly: '',
//     overwrite: '',
//     secure: '',
//     sameSite: '',
//     signed: ''
// }
// app.use(session({
//     key: 'SESSION_ID',
//     store: store,
//     cookie: cookie
// }))
// app.use(async ctx => {
//     if (ctx.url === '/set') {
//         ctx.session = {
//             user_id: Math.random().toString(36).substr(2),
//             count: 0
//         }
//         ctx.body = ctx.session
//     } else if (ctx.url === '/') {
//         ctx.session.count = ctx.session.count + 1
//         ctx.body = ctx.session
//     }
// })
// app.listen(port, () => {
//     console.log(`Server is running at ${port}`)
// })
const Koa = require('koa2')
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')

const app = new Koa()

// 配置存储session信息的mysql
let store = new MysqlSession({
    user: 'root',
    password: 'abc123',
    database: 'koa_demo',
    host: '127.0.0.1',
})

// 存放sessionId的cookie配置
let cookie = {
    maxAge: '', // cookie有效时长
    expires: '', // cookie失效时间
    path: '', // 写cookie所在的路径
    domain: '', // 写cookie所在的域名
    httpOnly: '', // 是否只用于http请求中获取
    overwrite: '', // 是否允许重写
    secure: '',
    sameSite: '',
    signed: '',

}

// 使用session中间件
app.use(session({
    key: 'SESSION_ID',
    store: store,
    cookie: cookie
}))

app.use(async (ctx) => {

    // 设置session
    if (ctx.url === '/set') {
        ctx.session = {
            user_id: Math.random().toString(36).substr(2),
            count: 0
        }
        ctx.body = ctx.session
    } else if (ctx.url === '/') {

        // 读取session信息
        ctx.session.count = ctx.session.count + 1
        ctx.body = ctx.session
    }

})

app.listen(3008)
console.log('[demo] session is starting at port 3008')