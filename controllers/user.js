const User = require ('../models/user')
import { generateToken, decodeToken } from '../middlewares/jwt'

export const add = async (ctx, next) => {
  const { username, password, email, description, } = ctx.request.body
  if (!username) return ctx.error ({ message: '用户名不存在' })
  if (!password) return ctx.error ({ message: '密码不存在' })
  if (!email) return ctx.error ({ message: '必须需要邮箱' })
  const _findUser = await User.findOne ({
    username
  })
  if (_findUser) return ctx.error ('用户名已经存在了', {}, 400)
  const user = await User.create ({ username, password, email, description, createAt: new Date () })
  ctx.success ('创建成功', user, 201)
  await next ()
}

export const login = async (ctx, next) => {
  const { username, password } = ctx.request.body
  const user = await User.findOne ({ username })
  if (!user) return ctx.error ('用户不存在')
  if (password === user.password) {
    const token = generateToken ({ username, email: user.email })
    ctx.success ('登录成功', { token })
  } else {
    return ctx.error ('密码错误', {})
  }
  await next ()
}

export const all = async (ctx, next) => {
  const users = await User.find ()
  // console.log (ctx.state.jwt)
  // await next ()
  // console.log (22)
  if (users) return ctx.success ('获取所有数据成功', users, 201)
  ctx.success ('获取所有数据成功', users, 200)
}

export const del = async (ctx, next) => {
  const _id = ctx.params.id
  if (!_id) return ctx.error ('没有id', {}, 404)
  const user = await User.findByIdAndRemove ({
    _id
  })
  if (user) return ctx.success ('删除成功', {}, 200)
  ctx.error ('删除失败', {}, -1)
}

export const one = async (ctx, next) => {
  const _id = ctx.params.id
  if (!_id) return ctx.error ('没有id', {}, 404)
  const user = await User.findOne ({
    _id
  })
  if (user) return ctx.success ('获取单个用户成功', {
    username: user.username,
    email: user.email,
  }, 200)
  ctx.error ('不存在此用户', {}, 200)
}