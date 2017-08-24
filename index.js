import Koa from 'koa'
import KoaRouter from 'koa-router'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import session from 'koa-session2'
import Store from './middlewares/redisStore'
import config from './config'
import routes from './routes/user'
import './middlewares/db'
import returnTemplate from './middlewares/return'

const app = new Koa ()

const router = new KoaRouter ()
// 引入主 路由表

// 这里使用app.use(bodyParser) 会报错
// https://segmentfault.com/q/1010000009716118
app.use (bodyParser ())

app.use (logger ())

app.use (helmet ())

// app.use (jwt)

// session

function getExpires(duraing, format = 'm') {
  //以一分钟为最低间隔时间
  let base = 60 * 1000
  let date = new Date ()
  let translate = {
    m: base,
    h: 60 * base,
    d: 24 * 60 * base
  }

  date.setTime (date.getTime () + duraing * translate[format])

  return date
}

app.use (session ({
  key: 'SESSIONID',
  store: new Store (),
  expires: getExpires (1)
}))

// 统一处理错误的模板

app.use (returnTemplate)
// console.log (config)

app.use (routes.routes (), router.allowedMethods ())

app.listen (config.port, err => {
  if (err) {
    console.log (err)
  }
  console.log (`🌴  Koa server listen on ${config.port}`)
  console.log (`👟  Mode is ${process.env.NODE_ENV}`)
  // console.log (process.env)
})


