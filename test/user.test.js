import request from 'supertest'
import app from '../src/index'

describe ('测试user接口', () => {
  it ('登录接口', () => {
    return request (app)
      .get ('/api/user/test')
      .expect ('Content-Type', /json/)
      .expect (200)
      .then (res => {
        const data = res.body
        expect (data.message).toBe ('访问接口成功')
      })
  })

  it ('添加用户', async () => {
    const res = await request (app)
      .post ('/api/user/add')
      .send ({
        username: 'aa',
        password: '123',
        email: '123@qq.com'
      })
    const data = res.body
    expect (data.message).toBe ('创建成功')

  })

  it ('重复添加用户', async () => {
    const res = await request (app)
      .post ('/api/user/add')
      .send ({
        username: 'aa',
        password: '123',
        email: '123@qq.com'
      })
    const data = res.body
    expect (data.message).toBe ('用户名已经存在了')
  })
})


