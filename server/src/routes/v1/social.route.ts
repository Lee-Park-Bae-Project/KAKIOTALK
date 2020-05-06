import express from 'express';
import {getFriendList} from '../../controllers/social'

const router = express.Router();

router.get('/friend-list',getFriendList);
export default router;