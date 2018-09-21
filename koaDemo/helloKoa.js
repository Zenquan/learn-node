const koa = require('koa2');

const app = new koa();
const hostname = '127.0.0.1';
const port = 3000;

app.use(async(ctx)=>{
    ctx.body = 'helllo, koa2'
})
app.listen(port, hostname, ()=>{
    console.log(`Server is running in ${port}`);
})