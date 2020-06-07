import express from 'express'
import {
  addFriend, deleteFriend, getFriendsList,
} from '../../controllers/social'
import isAuth from '../../middlewares/auth'

const router = express.Router()
router.use(isAuth)
router.get('/friend-list', getFriendsList)
router.post('/add-friend', addFriend)
router.delete('/delete-friend', deleteFriend)
export default router
