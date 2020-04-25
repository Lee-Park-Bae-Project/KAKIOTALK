import express from 'express'
import login from '../../controllers/auth'

const router = express.Router()

router.post('/google/', login)

export default router
