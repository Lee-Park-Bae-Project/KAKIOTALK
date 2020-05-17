import express from 'express';
import { userTest ,getMyProfile} from '../../controllers/user';
import isAuth from '../../middlewares/auth'
const router = express.Router();

router.get('/user', userTest);
router.get('/my-profile',isAuth,getMyProfile)
export default router;
