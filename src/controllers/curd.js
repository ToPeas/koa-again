class CURD {
  static isHaveAuth(ctx) {
    const role = ctx.session.role
    // console.log (ctx.session)
    if (role === 'admin') return true
    return false
  }

  isMethod(ctx) {
    console.log (ctx.session)
  }
}

export default CURD