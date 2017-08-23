// require ('babel-core/register')

import Koa from 'koa'
import KoaRouter from 'koa-router'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'

import './middlewares/db'

const returnTemplate = require ('./middlewares/return')

const app = new Koa ()

const router = new KoaRouter ()
const routes = require ('./routes/user')

// 这里使用app.use(bodyParser) 会报错
// https://segmentfault.com/q/1010000009716118
app.use (bodyParser ())

app.use (logger ())

// 统一处理错误的模板

app.use (returnTemplate)

app.use (routes.routes (), router.allowedMethods ())

app.listen (6324, err => {
  if (err) {
    console.log (err)
  }
  console.log ('我正在监听6324端口')
})


