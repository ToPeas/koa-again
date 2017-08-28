import request from 'supertest'
import app from '../src/index'

describe ('测试user接口', () => {
  it ('登录接口', () => {
    return request (app.listen (6325))
      .get ('/api/user/test')
      .expect ('Content-Type', /json/)
      .expect (200)
      .then (res => {
        console.log (res)
        const data = res.body
        expect (data.message).toBe ('接口访问成功')
      })
  })
})