import express from 'express';
import { getUserInfo, login } from '../../controllers/auth';

import isAuth from '../../middlewares/auth';

const router = express.Router();

router.post('/google/', login);
router.get('/check-auth', isAuth, getUserInfo);

export default router;
