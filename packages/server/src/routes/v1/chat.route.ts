import express from 'express'
import {
  addMessage,
  getChats,
  getFirstChat,
  getLastChat,
  getRoom,
  leaveRoom,
  makeRoom,
} from '../../controllers/chat'

import isAuth from '../../middlewares/auth'

const router = express.Router()

router.use(isAuth)
router.post('/room', makeRoom)
router.get('/message/:roomId', getChats)
router.get('/first-chat/:roomUuid', getFirstChat)
router.get('/last-chat/:roomUuid', getLastChat)
router.get('/room/:roomId?', getRoom)
router.post('/:roomUuid', addMessage)
router.get('/makeRoom', makeRoom)
router.delete('/leave/:roomUuid', leaveRoom)
export default router

