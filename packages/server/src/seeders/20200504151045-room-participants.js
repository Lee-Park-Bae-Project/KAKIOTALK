const moment = require('moment')

const tableName = 'room_participants'
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    tableName, [
      {
        id: 1,
        uuid: '49ba5ae5e268e8b1a47c5f0fd37cc50a',
        userId: 1,
        roomId: 1,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 2,
        uuid: '46ca5683565d4acca4fbd24f4d041ae9',
        userId: 2,
        roomId: 1,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 3,
        uuid: '4139f5b2f5f7ebb28f2d23a1a7bec3da',
        userId: 1,
        roomId: 2,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        id: 4,
        uuid: '49fe61ff9804ae6b9e70161c606f70db',
        userId: 3,
        roomId: 2,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },

    ]

  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
}
