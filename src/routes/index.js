import koaRouter from 'koa-router'

const router = new koaRouter ()

router.get ('/', (ctx) => {
  const { username } = ctx.session
  console.log(ctx.session)
  return ctx.render ('home', { username })
})


router.get ('/login', (ctx) => {
  const { username } = ctx.session
  return ctx.render ('login', { username })
})

export default router