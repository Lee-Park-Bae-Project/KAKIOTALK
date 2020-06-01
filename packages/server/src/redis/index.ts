import redis from 'redis'
import { promisify } from 'util'
import { getRedisOpts } from '../configs'

const redisOpts = getRedisOpts()
const client: redis.RedisClient = redis.createClient(redisOpts)
// reference: https://www.npmjs.com/package/redis#promises
const setAsync = promisify(client.set).bind(client)
const getAsync = promisify(client.get).bind(client)
client.on('error', (error) => {
  console.error(error)
})

export const set = async (key: string, value: string) => setAsync(key, value)
export const get = async (key: string) => getAsync(key)

