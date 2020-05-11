import express from 'express';
import {getFriendsList,addFriend} from '../../controllers/social'

const router = express.Router();

router.get('/friend-list',getFriendsList);
router.post('/add-friend',addFriend)
export default router;