import express from 'express'
import { userTest } from '../../controllers/user'

const router = express.Router()

router.get('/user', userTest)

export default router

