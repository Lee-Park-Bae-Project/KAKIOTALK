import express from 'express'
import {
  addMessage,
  getChats,
  getRoom,
  makeRoom,
} from '../../controllers/chat'

import isAuth from '../../middlewares/auth'

const router = express.Router()

router.use(isAuth)
router.post('/makeRoom', makeRoom)
router.get('/message/:roomId', getChats)
router.get('/room/:roomId?', getRoom)
router.post('/:roomUuid', addMessage)

export default router
