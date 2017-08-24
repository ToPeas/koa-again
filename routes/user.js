const router = require ('koa-router') ()
import jwt from '../middlewares/jwt'
import { add, login, all, del, one, test } from '../controllers/user'

// console.log (add)

// const cc = (ctx) => {
//   console.log ('111')
//   console.log ('最后一个中间件\n', ctx.state.jwt)
//
// }

router.prefix ('/api/user')

router.get ('/all', all)
  .get ('/test', test)
  .get ('/:id', one)
  .post ('/add', add)
  .post ('/login', login)
  .del ('/:id', del)

module.exports = router