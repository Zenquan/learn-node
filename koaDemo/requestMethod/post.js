// const koa = require('koa2')
// const app = new koa()

// const port = 3000
// const hostname = '127.0.0.1'
// function parsePostData(ctx){
//     return new Promise((resolve, reject)=>{
//         try {
//             let postdata = ''
//             ctx.req.addListener('data', (data)=>{
//                 postdata+=data
//             })
//             ctx.req.addListener('end', (data) => {
//                 let parseData = parseQueryStr(postdata)
//                 resolve(parseData)
//             })
//         } catch (error) {
//             reject(err)
//         }
//     })
// }
// function parseQueryStr(queryStr) {
//     let queryData = {}
//     let queryStrList = queryStr.split('&')
//     for(let [index, queryStr] of queryStrList.entries()){
//         let itemList = queryStr.split('=')
//         queryData[itemList[0]] = decodeURIComponent(itemList[1])
//     }
//     return queryData
// }
// app.use(async (ctx)=>{
//     if(ctx.url == '/' && ctx.method == 'GET'){
//         let html = `
//       <h1>koa2 request post demo</h1>
//       <form method="POST" action="/">
//         <p>userName</p>
//         <input name="userName" /><br/>
//         <p>nickName</p>
//         <input name="nickName" /><br/>
//         <p>email</p>
//         <input name="email" /><br/>
//         <button type="submit">submit</button>
//       </form>
//     `
//         ctx.body = html
//     } else if(ctx.url=='/'&&ctx.method=='POST'){
//         let postData = await parsePostData(ctx)
//         ctx.body = postData
//     }else {
//         ctx.body = '<h1>404!!!</h1>'
//     }
// })
// app.listen(port, hostname, ()=>{
//     console.log(`Server is running at ${port}`)
// })



const koa = require('koa2')
const app = new koa()
const hostname = '127.0.0.1'
var port = 3003

function parsePostData(ctx){
    return new Promise((resolve, reject)=>{
        try {
            let postdata = ''
            ctx.req.addListener('data', data=>{
                postdata+=data
            })
            ctx.req.addListener('end', data=>{
                let parseData = parseQueryData(data)
                resolve(parseData) 
            }) 
        } catch (error) {
            reject(error)
        }
    })
}
function parseQueryData(queryStr){
    let parseData = {}
    let queryStrList = queryStr.split('&')
    for(let [index, queryStr] of queryStrList) {
        let items = queryStr.split('=')
        parseData[items[0]] = decodeURIComponent(items[1])
    }
    return parseData;
}
app.use(async ctx=>{
    if(ctx.url==='/'&&ctx.method==='GET') {
        let html = `
            <h1>koa2 request post demo</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>nickName</p>
                <input name="nickName" /><br/>
                <p>email</p>
                <input name="email" /><br/>
                <button type="submit">submit</button>
            </form>
        `
        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let parseData = await parsePostData(ctx)
        ctx.body = parseData;
    } else {
        ctx.body = `<p>404 Page!</p>`
    }
})
app.listen(port, hostname, ()=>{
    console.log(`Server is running at 127.0.0.1:${port}`)
})