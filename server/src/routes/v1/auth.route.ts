import express from 'express';
import { getUserInfo, login, logout } from '../../controllers/auth';

import isAuth from '../../middlewares/auth';

const router = express.Router();

router.post('/google/', login);
router.post('/logout', logout);
router.get('/check-auth', isAuth, getUserInfo);

export default router;
