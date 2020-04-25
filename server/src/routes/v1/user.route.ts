import express from 'express'
import {
  chatTest, userTest,
} from '../../controllers/user'

const router = express.Router()

router.get('/user', userTest)
router.get('/chat', chatTest)

export default router

