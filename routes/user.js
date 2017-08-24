const router = require ('koa-router') ()
import jwt from '../middlewares/jwt'
import { add, login, all, del, one, test } from '../controllers/user'

router.prefix ('/api/user')

router.get ('/all', jwt, all)
  .get ('/test', jwt, test)
  .get ('/:id', jwt, one)
  .post ('/add', add)
  .post ('/login', login)
  .del ('/:id', jwt, del)

export default router