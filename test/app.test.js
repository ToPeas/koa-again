import request from 'supertest'
import app from '../src/test'

describe ('测试user接口', () => {
  it ('登录接口', () => {
    return request (app)
      .get ('/')
      .expect ('Content-Type', /json/)
      .expect (200)
      .then (res => {
        const data = res.body
        expect (data.username).toBe ('pei')
      })
  })
})