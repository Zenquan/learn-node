const express = require('express')
/**
 * superagent(http: //visionmedia.github.io/superagent/ ) 
 * 是个 http 方面的库，可以发起 get 或 post 请求。
 * 
 * cheerio(https: //github.com/cheeriojs/cheerio ) 大家可
 * 以理解成一个 Node.js 版的 jquery，用来从网页中以 css selector 
 * 取数据，使用方式跟 jquery 一样一样的。
*/
const superagent = require('superagent')
const cheerio = require('cheerio')

const app = express()
const port = 3018
const hostname = '127.0.0.1'

app.get('/', (req, res, next) => {
    superagent.get('https://cnodejs.org')
        .end((err, sres) => {
            if (err) {
                return next(err)
            }
            var $ = cheerio.load(sres.text)
            var items = []
            $('.topic_title_wrapper .topic_title').each((idx, element) => {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                })
            })
            res.send(items)
        })
})
app.listen(port, hostname, () => {
    console.log(`Server is running at port ${port}`)
})