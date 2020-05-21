import express from 'express';
import {getFriendsList,addFriend,deleteFriend} from '../../controllers/social'
import isAuth from '../../middlewares/auth'
const router = express.Router();
router.use('',isAuth)
router.get('/friend-list',getFriendsList);
router.post('/add-friend',addFriend);
router.post('/delete-friend',deleteFriend);
export default router;