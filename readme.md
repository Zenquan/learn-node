# node复习

## node原生

## Express框架

## Koa框架

什么是koa？
koa是一款node框架，从koa2开始支持async...await

环境准备：
- nodejs >v7.6.0
- npm 版本3.x以上

安装koa2
```bash
npm init
npm install koa
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

参考:

- [Node.js 包教不包会](https://github.com/alsotang/node-lessons)
- [Koa2进阶学习笔记](https://chenshenhai.github.io/koa2-note/)
- [Koa.js 设计模式-学习笔记](https://github.com/chenshenhai/koajs-design-note)
- [Node.js 调试指南](https://github.com/nswbmw/node-in-debugging)
- [jackblog-api-koa](https://github.com/jackhutu/jackblog-api-koa)
- [fiora](https://github.com/yinxin630/fiora)