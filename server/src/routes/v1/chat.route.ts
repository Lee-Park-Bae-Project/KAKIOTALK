import express from 'express'
import {
  getChats, getRoom,
} from '../../controllers/chat'

import isAuth from '../../middlewares/auth'

const router = express.Router()

// router.use(isAuth)
router.get('/:roomId', getChats)
router.get('/room/:roomId', getRoom)

export default router
