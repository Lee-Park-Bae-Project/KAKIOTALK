import express from 'express';
import { getMyProfile, updateProfile } from '../../controllers/user';
import isAuth from '../../middlewares/auth';
const router = express.Router();
router.use(isAuth);
router.get('/my-profile', getMyProfile);
router.patch('/update-profile', updateProfile);
export default router;
