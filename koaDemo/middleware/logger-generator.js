// function log(ctx) {
//     console.log(ctx.method, ctx.header.host+ctx.url)
// }

// module.exports = function () {
//     return function * (next) {
//         log(this)
//         if(next) {
//             yield next
//         }
//     }
// }

function log(ctx) {
    console.log(ctx.methods, ctx.header.url);
}

module.exports = function () {
    return function * (next) {
        log(this)
        if (next) {
            yield next
        }
    }
}
