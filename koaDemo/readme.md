# Koa框架

什么是koa？
koa是一款node框架，从koa2开始支持async...await

环境准备：
- nodejs >v7.6.0
- npm 版本3.x以上

安装koa2
```bash
npm init
npm install koa2
```

Helllo, koa2

```js
const koa = require('koa2');

const app = new koa();
const hostname = '127.0.0.1';
const port = 3000;

app.use(async(ctx)=>{
    ctx.body = 'Helllo, koa2'
})
app.listen(port, hostname, ()=>{
    console.log(`Server is running in ${port}`);
})
```