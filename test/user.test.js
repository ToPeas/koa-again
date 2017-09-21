import supertest from 'supertest'
import app from '../src/index'

describe('测试user接口', () => {
  const request = supertest(app.listen())

  it('测试接口', () => {
    return request
      .get('/api/user/test')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        const data = res.body
        expect(data.message).toBe('访问接口成功')
      })
  })

  it('登录', async () => {
    const res = await request
      .post('/api/user/login')
      .send({
        username: 'aa',
        password: '123',
      })
    const data = res.body
    console.log(res.body)
    expect(data.message).toBe('登录成功')
  })

  it('重复添加', async () => {
    const res = await request
      .post('/api/user/add')
      .send({
        username: 'aa',
        password: '123',
        email: '123@qq.com'
      })
    const data = res.body
    expect(data.message).toBe('用户名已经存在了')
  })
})
