const router = require ('koa-router') ()

import { add, login, all, del, one } from '../controllers/user'

// console.log (add)

router.prefix ('/api/user')

router.get ('/all', all)
  .get ('/:id', one)
  .post ('/add', add)
  .post ('/login', login)
  .del ('/:id', del)

module.exports = router