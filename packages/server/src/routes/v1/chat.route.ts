import express from 'express'
import {
  addMessage,
  getChats,
  getRoom,
  makeChat,
} from '../../controllers/chat'

import isAuth from '../../middlewares/auth'

const router = express.Router()

router.use(isAuth)
router.get('/message/:roomId', getChats)
router.get('/room/:roomId?', getRoom)
router.post('/:roomUuid', addMessage)
router.post('/makeChat', makeChat)

export default router
