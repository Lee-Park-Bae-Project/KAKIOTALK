import fs from 'fs'
import path from 'path'

const express = require('express')

const router = express.Router()
const indexJs = path.basename(__filename) // return filename part of a file path.

fs.readdirSync(__dirname) // read all file from path
  .filter((file) => file.indexOf('.') !== 0 && file !== indexJs)
  .forEach((routeFile) => router.use(`/${routeFile.split('.')[0]}`, require(`./${routeFile}`).default))

export default router

