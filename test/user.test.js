import supertest from 'supertest'
import app from '../src/index'

let token 
let id 

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
    const res = await request.post('/api/user/login').send({
      username: 'aa',
      password: '123'
    })
    const data = res.body
    token = data.data.token
    expect(data.message).toBe('登录成功')
  })
  it('token被修改添加新用户', async () => {
    const res = await request.post('/api/user/add')
    .set('Authorization', `Bearer ${token}1`)
    .send({
      username: 'cc',
      password: '123',
      email: '1233@qq.com'
    })
    const statusCode = res.statusCode
    expect(statusCode).toEqual(401)
  })

  it('添加新用户', async () => {
    const res = await request.post('/api/user/add')
    .set('Authorization', `Bearer ${token}`)
    .send({
      username: 'cc',
      password: '123',
      email: '1233@qq.com'
    })
    const data = res.body
    id = data.data._id
    expect(data.message).toBe('创建成功')
  })

  it('重复添加用户', async () => {
    const res = await request.post('/api/user/add')
    .set('Authorization', `Bearer ${token}`)
    .send({
      username: 'cc',
      password: '123',
      email: '1233@qq.com'
    })
    const data = res.body
    expect(data.message).toBe('用户名已经存在了')
  })

  it('删除用户', async () => {
    const res = await request.del(`/api/user/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .send({
      username: 'cc',
      password: '123',
      email: '1233@qq.com'
    })
    const data = res.body
    expect(data.message).toBe('删除成功')
  })
})
