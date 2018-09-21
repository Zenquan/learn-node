// function log(ctx) {
//     console.log(ctx.method, ctx.header.host+ctx.url)
// }

// module.exports = function () {
//     return async function (next) {
//         log(this)
//         if(next) {
//             await next
//         }
//     }
// }


function log(ctx) {
    console.log(ctx.methods, ctx.header.url);
}

module.exports = function () {
    return async function (next) {
        log(this)
        if (next) {
            await next
        }
    }
}