import { signUp } from './userService'

describe('user service test', () => {
  it('should have equal name', async () => {
    const user = await signUp('lee', 'sjdfkjsdkf@gmail.com')
    expect(user.name).toEqual('lee')
  }, 60000)
})
