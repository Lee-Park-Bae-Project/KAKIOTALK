import express from 'express'
import {
  getChatList,
  getFriendList,
  getProfile,
} from '../../controllers/dummy'

const router = express.Router()

router.get('/my-profile', getProfile)
router.get('/friend-list', getFriendList)
router.get('/chat-list', getChatList)

export default router
