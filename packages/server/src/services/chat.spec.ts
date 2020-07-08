import request from 'supertest'

const app = require('../app')

const agent = request.agent(app)
const googleId = '113283872440363914094'
const email = 'leeparkbaeproject@gmail.com'
const name = 'Junho Lee'
const googleAccessToken = '123'
it('로그인 | 200', async () => {
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

describe('GET /v1/chat/', () => {
  it('roomId 로 채팅 조회 | 200', async () => {
    const roomId = '46e137796f00ee278ac7a5ca17e3b586'
    const response = await agent.get(`/v1/chat/message/${roomId}?offset=0&limit=5`)
    expect(response.status).toEqual(200)
  })

  it('roomId 로 채팅 조회 | 404', async () => {
    const response = await agent.get('/v1/chat/message/aaa')
    expect(response.status).toEqual(404)
  })
})

describe('GET: v1/chat/room', () => {
  it('참여중인 방목록 조회 | 200', async () => {
    const response = await agent.get('/v1/chat/room')

    const { data } = response.body
    expect(response.status).toEqual(200)
    expect(data[0].uuid).toBeTruthy()
    expect(data[0].participants).toBeTruthy()
  })

  it('특정 방 조회 | 200', async () => {
    const roomId = '48f12d2c2e6a0988b3469f4a8b36fae3'
    const response = await agent.get(`/v1/chat/room/${roomId}`)

    const { data } = response.body
    expect(response.status).toEqual(200)
    expect(data.uuid).toEqual(roomId)
  })
})

describe('채팅추가', () => {
  let roomUuid
  let prevMessages
  it('GET: /v1/chat/room 참여중인 방목록 조회 | 200', async () => {
    const response = await agent.get('/v1/chat/room')

    const { data } = response.body
    roomUuid = data[0].uuid
    expect(response.status).toEqual(200)
    expect(data[0].uuid).toBeTruthy()
    expect(data[0].participants).toBeTruthy()
  })

  it('GET: /v1/chat/message/:roomUuid roomUuid로 해당방의 채팅 조회 | 200', async () => {
    const response = await agent.get(`/v1/chat/message/${roomUuid}?offset=0&limit=10`)
    const { data } = response.body
    expect(response.status).toEqual(200)
    prevMessages = data
  })

  it('POST: /v1/chat/:roomUuid', async () => {
    const response = await agent
      .post(`/v1/chat/${roomUuid}`)
      .send({
        content: 'test message',
        createdAt: new Date(),
        updatedAt: new Date(),
      })

    expect(response.status).toEqual(200)
    expect(response.body.data).toBeTruthy()
    expect(response.body.data).not.toEqual(prevMessages)
  })
})

describe('첫번째, 마지막 채팅 가져오기', () => {
  it('GET: /v1/chat/first-chat | 200', async () => {
    const roomUuid = '46e137796f00ee278ac7a5ca17e3b586'
    const response = await agent.get(`/v1/chat/first-chat/${roomUuid}`)
    const { data } = response.body
    expect(data.content).toEqual('im ghost')
  })

  it('GET: /v1/chat/last-chat | 200', async () => {
    const roomUuid = '46e137796f00ee278ac7a5ca17e3b586'
    const response = await agent.get(`/v1/chat/last-chat/${roomUuid}`)
    const { data } = response.body
    expect(data.content).toEqual('im not ghost')
  })
})
