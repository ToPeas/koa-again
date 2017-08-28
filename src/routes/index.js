import koaRouter from 'koa-router'

const router = new koaRouter ()

router.get ('/', (ctx) => {
  // console.log ('1')
  const { username } = ctx.session
  return ctx.render ('home', { username })
})

export default router