import express from 'express'
import jwt from 'jsonwebtoken'
import userService from '../../services/userService'
import { jwtConfig } from '../../configs'

const router = express.Router()

router.post('/google/', async (req, res, next) => {
  const {
    googleId,
    email,
    name,
    googleAccessToken,
  } = req.body

  const user = await userService.findOrCreate(
    googleId,
    name,
    email,
    googleAccessToken,
  )

  const payload = { googleId }
  const token = jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.ttl })
  res.json({
    user,
    token,
  })
})

export default router
