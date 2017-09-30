const User = require('../models/user')
import { generateToken } from '../middlewares/jwt'
import CURD from './curd'

const admin = {
  username: 'admin',
  password: 'dev',
  email: 'peiqixin@gmail.com'
}

export const add = async (ctx, next) => {
  const { username, password, email, description } = ctx.request.body
  if (!username) return ctx.error({ message: '用户名不存在' })
  if (!password) return ctx.error({ message: '密码不存在' })
  if (!email) return ctx.error({ message: '必须需要邮箱' })
  const _findUser = await User.findOne({
    username
  })
  if (_findUser) return ctx.error('用户名已经存在了', {}, 400)
  const user = await User.create({
    username,
    password,
    email,
    description,
    createAt: new Date()
  })
  ctx.success('创建成功', user, 201)
  await next()
}

export const login = async (ctx, next) => {
  const { username, password } = ctx.request.body
  if (username === admin.username && password === admin.password) {
    const token = generateToken({ username, email: admin.email })
    ctx.success('登录成功', { token })
    return (ctx.session = {
      username: admin.username,
      email: admin.email,
      role: 'admin',
      lastLoginDate: new Date()
    })
  }
  const user = await User.findOne({ username })

  if (!user) return ctx.error('用户不存在')
  if (password === user.password) {
    const token = generateToken({ username, email: user.email })
    ctx.success('登录成功', { token })
    ctx.session = {
      username,
      email: user.email,
      role: 'admin',
      lastLoginDate: new Date()
    }
  } else {
    return ctx.error('密码错误', {})
  }
  await next()
}

export const all = async (ctx, next) => {
  const users = await User.find()
  if (users) return ctx.success('获取所有数据成功', { users }, 200)
  await next()
}

export const del = async (ctx, next) => {
  const _id = ctx.params.id
  if (!_id) return ctx.error('没有id', {}, 404)
  const user = await User.findByIdAndRemove({
    _id
  })
  if (user) return ctx.success('删除成功', {}, 200)
  ctx.error('删除失败', {}, -1)
}

export const one = async (ctx, next) => {
  const _id = ctx.params.id
  if (!_id) return ctx.error('没有id', {}, 404)
  const user = await User.findOne({
    _id
  })
  if (user)
    return ctx.success(
      '获取单个用户成功',
      {
        username: user.username,
        email: user.email
      },
      200
    )
  ctx.error('不存在此用户', {}, 200)
}

// 测试redis。第一次使用redis
export const test = async (ctx, next) => {
  // console.log ('tttt')
  // const { uid } = ctx.request.query
  // console.log (id)
  // if (+id === 1) {
  //   ctx.session.userInfo = {
  //     username: '我的ID是1'
  //   }
  // }
  // if (+id === 2) {
  //   ctx.session.userInfo = {
  //     username: '我的ID是2'
  //   }
  //
  // }
  ctx.success('访问接口成功')
}

export const testClass = async ctx => {
  class UserClass extends CURD {
    constructor() {
      super()
    }

    static isTest(ctx) {
      return super.isHaveAuth(ctx)
    }
  }

  // const cc = new UserClass ()
  return ctx.success(UserClass.isTest(ctx))
}
