import request from 'supertest'

const app = require('../../app')

const roomId = 1
describe(`GET: /v1/chat/${roomId}`, () => {
  it('roomId 로 채팅 조회 | 200', async () => {
    const response = await request(app).get(`/v1/chat/message/${roomId}`)
    expect(response.status).toEqual(200)
  })

  it('roomId 로 채팅 조회 | 404', async () => {
    const response = await request(app).get('/v1/chat/aaa')
    expect(response.status).toEqual(404)
  })
})

