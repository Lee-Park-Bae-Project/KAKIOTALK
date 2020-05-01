const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const baseDbSetting = {
  timezone: '+09:00',
  dialect: 'mysql',
  pool: {
    max: 100,
    min: 0,
    idle: 10000,
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: true,
  },
}
module.exports = {
  production: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    port: process.env.DB_PORT,
    logging: false,
    ...baseDbSetting,
  },

  development: {
    host: process.env.DB_DEV_HOST,
    database: process.env.DB_DEV_NAME,
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PW,
    port: process.env.DB_DEV_PORT,
    logging: true,
    ...baseDbSetting,
  },

  test: {
    host: process.env.DB_TEST_HOST,
    database: process.env.DB_TEST_NAME,
    username: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PW,
    port: process.env.DB_TEST_PORT,
    logging: false,
    ...baseDbSetting,
  },
}
