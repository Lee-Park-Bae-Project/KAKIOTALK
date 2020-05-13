import request from 'supertest'

const app = require('../../app')

const agent = request.agent(app)
const roomId = 1

it('로그인 | 200', async () => {
  const googleId = '113283872440363914094'
  const email = 'leeparkbaeproject@gmail.com'
  const name = 'Junow Lee'
  const googleAccessToken = '123'
  const response = await agent
    .post('/v1/auth/google')
    .send({
      googleId,
      email,
      name,
      googleAccessToken,
    })

  expect(response.status).toEqual(200)
})

describe(`GET: /v1/chat/${roomId}`, () => {
  it('roomId 로 채팅 조회 | 200', async () => {
    const response = await agent.get(`/v1/chat/message/${roomId}`)
    expect(response.status).toEqual(200)
  })

  it('roomId 로 채팅 조회 | 404', async () => {
    const response = await agent.get('/v1/chat/aaa')
    expect(response.status).toEqual(404)
  })
})

describe('GET: v1/chat/room', () => {
  it('내가 참여중인 방목록 조회 | 200', async () => {
    const response = await agent.get('/v1/chat/room')
    expect(response.status).toEqual(200)
  })
})
