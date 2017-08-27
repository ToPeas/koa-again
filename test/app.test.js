import request from 'supertest'
import app from '../src/cc'

console.log (app)
const loginInfo = {
  username: 'cc',
  password: '123',
}

// describe ('测试user接口', () => {
test ('登录接口', () => {
  return request (app)
    .get ('/api/user/test')
    .then (res => {
      console.log (res)
      expect (res.text).toBe ('{"ac":"ccc"}')
    })
})

// })