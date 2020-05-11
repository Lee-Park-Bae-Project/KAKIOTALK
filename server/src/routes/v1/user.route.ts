import express from 'express';
import { userTest ,getMyProfile} from '../../controllers/user';

const router = express.Router();

router.get('/user', userTest);
router.get('/my-profile',getMyProfile)
export default router;
