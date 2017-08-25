import koaRouter from 'koa-router'
import users from './user'

// console.log (users)
const router = new koaRouter ()

router.prefix ('/api')

router.use (users.routes (), users.allowedMethods ())

export default router
