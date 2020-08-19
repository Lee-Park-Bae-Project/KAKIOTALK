import express from 'express'
import {
  getUserInfo, googleLogin, googleLoginCallback, logout,
} from '../../controllers/auth'
import isAuth from '../../middlewares/auth'

const router = express.Router()

router.get('/google', googleLogin)
router.get('/google/callback', googleLoginCallback)
router.get('/logout', logout)
router.get('/check-auth', isAuth, getUserInfo)

export default router
