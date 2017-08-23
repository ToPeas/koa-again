import koaJwt from 'koa-jwt'
import jwt from 'jsonwebtoken'

const JWTSecret = 'PQX'

const JWTOption = {
  expiresIn: '1h'
}

export default koaJwt ({
  getToken(ctx) {
    const { authorization } = ctx.header
    if (authorization && (authorization.split (' ')[0] === 'Bearer' || authorization.split (' ')[0] === 'Token')) {
      return authorization.split (' ')[1]
    }
    return null
  },
  secret: JWTSecret,
  passthrough: false, // 通过验证的token还能通过不,
  key: 'jwt',
  // 如果你更喜欢使用另外一个ctx key来表示解码数据,只需要传入key属性,如下:
})

// 解码token
export const decodeToken = (token) => koaJwt ({ secret: JWTSecret, })

// 生成token
export const generateToken = (userInfo) => {
  const { username, email } = userInfo
  return jwt.sign ({ username, email }, JWTSecret, JWTOption)

}
