// const koa = require('koa2')
// const fs = require('fs')
// const Router = require('koa-router')

// const app = new koa()
// const home = new Router()

// function render(page) {
//     return new Promise((resolve, reject) => {
//         let viewUrl = `./view/${page}`
//         fs.readFile(viewUrl, 'binary', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })

// }
// async function route(url) {
//     let view = '404.html'
//     switch (url) {
//         case '/':
//             view = 'index.html';
//             break;
//         case '/index':
//             view = 'index.html';
//             break;
//         case '/todo':
//             view = 'todo.html';
//             break;
//         case '/404':
//             view = '404.html';
//             break;
//         default:
//             view = '404.html';
//             break;
//     }
//     let html = await render(view);
//     return html;
// }
// app.use(async (ctx) => {
//     let url = ctx.request.url;
//     let html = await route(url);
//     ctx.body = html;
// })

// app.listen(3010, () => {
//     console.log(`Server is running at 3010`)
// })

const koa = require('koa2')
const router = require('koa-router')
const fs = require('fs')

const app = new koa()

function render(page) {
    return new Promise((resolve, reject) => {
        let viewUrl = `./view/${page}`
        fs.readFile(viewUrl, (err, data)=>{
            if (err) {
                reject(err)
            }else {
                resolve(data)
            }
        })
    })
}

async function route(url) {
    let view = '404.html'
    switch (url) {
        case '/':
            view = 'index.html'
            break;
        case '/index':
            view = 'index.html'
            break;
        case '/todo':
            view = 'todo.html'
            break;
        case '/404':
            view = '404.html'
            break;
        default:
            break;
    }
    let html = await render(view)
    return html
}
app.use(async (ctx)=>{
    let url = ctx.header.url;
    let html = await route(url);
    ctx.body = html;
})

app.listen(3000, ()=>{
    console.log('Server is running at port 3000')
})