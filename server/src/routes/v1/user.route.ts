import express from 'express';
import { getMyProfile} from '../../controllers/user';
import isAuth from '../../middlewares/auth'
const router = express.Router();
router.use(isAuth)
router.get('/my-profile',getMyProfile)
export default router;
