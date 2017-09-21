const router = require ('koa-router') ()
import jwt from '../middlewares/jwt'
import { add, login, all, del, one, test, testClass } from '../controllers/user'

router.prefix ('/user')

router.get ('/all', jwt, all)
  .get ('/test', test)
  .get ('/testClass', testClass)
  .get ('/:id', jwt, one)
  .post ('/add',jwt, add)
  .post ('/login', login)
  .del ('/:id', jwt, del)

export default router