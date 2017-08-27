const Koa = require ('koa')
const app = new Koa ()

app.use (async ctx => {
  ctx.body = { ac: 'ccc' }
})

module.exports = app.listen (7777)