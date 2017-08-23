module.exports = async (ctx, next) => {
  ctx.error = (message, data = {}, code = -1) => {
    return ctx.body = {
      code,
      message,
      data,
    }
  }

  ctx.success = (message, data = {}, code = 0) => {
    return ctx.body = {
      code,
      message,
      data,
    }
  }
  await next ()
}