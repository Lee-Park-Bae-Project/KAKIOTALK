import express from 'express';
import {getFriendsList,addFriend} from '../../controllers/social'
import isAuth from '../../middlewares/auth'
const router = express.Router();

router.get('/friend-list',isAuth,getFriendsList);
router.post('/add-friend',isAuth,addFriend)
export default router;