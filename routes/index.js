import koaRouter from 'koa-router'

const router = new koaRouter ()

router.get ('/', (ctx) => {
  console.log (ctx.session)
  const { username } = ctx.session
  return ctx.render ('home', { username })
})

export default router